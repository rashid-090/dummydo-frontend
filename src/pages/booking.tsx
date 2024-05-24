/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetStateAction, useState } from 'react';
import { FaStarOfLife } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useLocation } from 'react-router-dom';
import { getPrice } from '../api/apiConnections/priceConnections';
import { toast } from 'react-toastify';
import { createPaymentSession, placeOrder } from '../api/apiConnections/orderConnections';
import { Preloader } from '../components';
import {FormikErrors, useFormik} from 'formik';
import * as Yup from 'yup';
import { FormikValuesForBooking } from '../interfaces/orderInterface';


const generatePassengerValidation = (passengerCount:number) => {
  return Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required('Required'),
      firstName: Yup.string().max(20, "Maximum 20 characters allowed").required('Required'),
      lastName: Yup.string().max(20, "Maximum 20 characters allowed").required('Required')
    })
  ).length(passengerCount, `Must have exactly ${passengerCount} passengers`);
};

type PassengerErrors = FormikErrors<{ title: string; firstName: string; lastName: string; }>

const MultiStepForm = () => {
  const { state }:any = useLocation()
  const [step, setStep] = useState(1);
  
  const [total, setTotal] = useState('')
  const [currency, setCurrency] = useState('')
  const [loading,setLoading] = useState(false)
  
  
  const formik = useFormik<FormikValuesForBooking>({
    initialValues:{
      purpose:'',
      email:'',
      mobileNumber:'',
      passengerData: Array.from({ length: state.passengerCount }, () => ({ title: '', firstName: '', lastName: '' }))
    },
    validationSchema: Yup.object().shape({
      purpose: Yup.string()
      .required('Required'),
      email: Yup.string()
      .email("Invalid E-mail id")
      .max(50, 'Enter valid E-mail id')
      .required('Required'),
      mobileNumber:Yup.string()
      .min(9, 'Enter valid Mobile number')
      .required('Required'),
      passengerData:generatePassengerValidation(state.passengerCount)
    }),
    onSubmit: async()=> {
      const priceResponse = await getPrice(state)
      if (priceResponse?.status) {
        setStep((prevStep) => prevStep + 1);
        setTotal(priceResponse.data.total)
        setCurrency(priceResponse.data.currency)
      } else {
        toast.error(priceResponse.message)
      }
    }
  })
  
  const prevPage = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setStep((prevStep) => prevStep - 1);
  };


  const handleSubmitOrder = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setLoading(true)
    const orderCreationResponse = await placeOrder({
      ...state,
      ...formik.values
    })
    
    if (orderCreationResponse?.status) {
      const ziinaResponse = await createPaymentSession(orderCreationResponse.data)
      if (ziinaResponse?.status) {
        localStorage.setItem("ziinaId",ziinaResponse.paymentId)
        window.location.href = ziinaResponse.url;
      } else {
        setLoading(false)
        toast.error("Error creating payment session")
      }
    } else {
      setLoading(false)
      toast.error(orderCreationResponse.message)
    }
  }

  const handlePurpose = (event: { target: { value: SetStateAction<string>; }; }) => {
    formik.setFieldValue('purpose',event.target.value)
  }

  return loading ? <Preloader/> : (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center mb-20">
      <div className="bg-white p-10 h-full w-11/12 xl:w-9/12 mx-auto py-10 xl:py-20 rounded-3xl shadow-lg border">
        <div className="flex flex-col gap-4">
          <div className="w-full h-3 bg-gray-300 rounded-full">
            <div
              className={`h-full bg-main rounded-full ${(step === 1 && 'w-1/2') ||
                (step === 2 && 'w-full')
                }`}
            ></div>
          </div>
          <div className="text-gray-500 text-sm">
            Confirmation - Step {step} of 2
          </div>
        </div>

          {/* ======================================Page 1====================================== */}
          {step === 1 && (
          <form onSubmit={formik.handleSubmit}>
            <div>
              <div className='py-20 space-y-10'>
                <div>
                  <label className='flex items-center'>Type of Use<span className='pl-2 text-[7px] text-red-500'><FaStarOfLife /></span></label>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-3'>
                    <div className='flex gap-3 items-center'><input onChange={handlePurpose} id='visaProof' value='visaProof' checked={formik.values.purpose === 'visaProof'} type="radio" className='w-5 h-5 cursor-pointer' name='visa' /><label htmlFor='visaProof'>For Visa Application</label></div>
                    <div className='flex gap-3 items-center'><input onChange={handlePurpose} id='travelProof' value='travelProof' checked={formik.values.purpose === 'travelProof'} type="radio" className='w-5 h-5 cursor-pointer' name='visa' /><label htmlFor='travelProof'>For Travel Return Proof</label></div>
                  </div>
                  <p className="h-2 ml-2 text-xs font-gilmerlight text-red-500">{formik.touched.purpose && formik.errors.purpose ? formik.errors.purpose : null}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10  font-normal capitalize text-base">
                  <div className='flex flex-col gap-3'>
                    <label className='flex items-center'>Email<span className='pl-2 text-[7px] text-red-500'><FaStarOfLife /></span></label>
                    <input
                      {...formik.getFieldProps('email')}
                      type="email"
                      className='h-10 p-2 outline-none border border-gray-300 rounded-md' 
                    />
                    <p className="h-2 ml-2 text-xs font-gilmerlight text-red-500">{formik.touched.email && formik.errors.email ? formik.errors.email : null}</p>
                  </div>
                  <div className='flex flex-col gap-3'>
                    <label className='flex items-center'>Mobile Number<span className='pl-2 text-[7px] text-red-500'><FaStarOfLife /></span></label>

                      <PhoneInput
                        placeholder="+971 012 345 678 9"
                        // disableDropdown
                        enableSearch={true}
                        disableSearchIcon={true}
                        inputProps={{name:"mobileNumber",required: true, autoFocus: true}}
                        buttonStyle={{borderRadius:"6px 0 0 6px"}}
                        inputStyle={{height:"2.5rem",width:"100%",borderRadius:"6px",paddingLeft:"45px",borderBlockColor:"lightgray"}}
                        value={formik.values.mobileNumber}
                        onChange={(value)=>formik.setFieldValue('mobileNumber',`+${value}`)}
                        onBlur={formik.handleBlur}
                      />

                    <p className="h-2 ml-2 text-xs font-gilmerlight text-red-500">{formik.touched.mobileNumber && formik.errors.mobileNumber ? formik.errors.mobileNumber : null}</p>
                  </div>
                </div>

                {formik.values.passengerData?.map((_, index:number) => (
                  <div key={index} className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex flex-col gap-3'>
                      <label className='flex items-center'>Mr/Ms<span className='pl-2 text-[7px] text-red-500'><FaStarOfLife /></span></label>
                      <select {...formik.getFieldProps(`passengerData[${index}].title`)} className='h-10 w-full border border-gray-300 p-2 rounded-md outline-none'>
                        <option value="">Choose</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs.">Mrs.</option>
                      </select>
                      <p className="h-2 ml-2 text-xs font-gilmerlight text-red-500">{formik.touched.passengerData?.[index]?.title && (formik.errors.passengerData?.[index] as PassengerErrors)?.title ? (formik.errors.passengerData?.[index] as PassengerErrors)?.title : null}</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label className='flex items-center'>First Name<span className='pl-2 text-[7px] text-red-500'><FaStarOfLife /></span></label>
                      <input {...formik.getFieldProps(`passengerData[${index}].firstName`)} className='h-10 p-2 outline-none border border-gray-300 rounded-md' type="text" />
                      <p className="h-2 ml-2 text-xs font-gilmerlight text-red-500">{formik.touched.passengerData?.[index]?.firstName && (formik.errors.passengerData?.[index] as PassengerErrors)?.firstName ? (formik.errors.passengerData?.[index] as PassengerErrors)?.firstName : null}</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label className='flex items-center'>Last Name</label>
                      <input {...formik.getFieldProps(`passengerData[${index}].lastName`)} className='h-10 p-2 outline-none border border-gray-300 rounded-md' type="text" />
                      <p className="h-2 ml-2 text-xs font-gilmerlight text-red-500">{formik.touched.passengerData?.[index]?.lastName && (formik.errors.passengerData?.[index] as PassengerErrors)?.lastName ? (formik.errors.passengerData?.[index] as PassengerErrors)?.lastName : null}</p>
                    </div>
                  </div>
                ))}

              </div>
              <button
                type="submit"
                className="bg-white border shadow-lg  text-main hover:text-white font-medium tracking-wider transition-all duration-150 py-2 px-4 rounded-lg hover:bg-main"
              >
                Next
              </button>
            </div>
          </form>
          )}
          {/* ======================================Page 2 ====================================== */}
          {step === 2 && (
            <div>
              <div className='py-20 space-y-2'>
                <p>Total Amount</p>
                <p>Price: {currency} {total}</p>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevPage}
                  className="bg-white border shadow-lg  text-main hover:text-white font-medium tracking-wider transition-all duration-150 py-2 px-4 rounded-lg hover:bg-main"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={handleSubmitOrder}
                  className="bg-white border shadow-lg  text-main hover:text-white font-medium tracking-wider transition-all duration-150 py-2 px-4 rounded-lg hover:bg-main"
                >
                  Buy Now
                </button>
              </div>
            </div>
          )}

      </div>
    </div>
  );
};

export default MultiStepForm;
