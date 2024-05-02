import { useState } from 'react';
import { FaStarOfLife } from "react-icons/fa";
import Select from 'react-select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl, isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import { useNavigate } from 'react-router-dom';



const MultiStepForm = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState('')
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    page1: '',
    page2: '',
    page3: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  

  const nextPage = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevPage = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

 

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="bg-white p-10 h-full w-11/12 xl:w-9/12 mx-auto py-10 xl:py-20 rounded-3xl shadow-lg border">
        <div className="flex flex-col gap-4">
          <div className="w-full h-3 bg-gray-300 rounded-full">
            <div
              className={`h-full bg-main rounded-full ${
                (step === 1 && 'w-1/2') ||
                (step === 2 && 'w-full')
              }`}
            ></div>
          </div>
          <div className="text-gray-500 text-sm">
          Confirmation - Step {step} of 2
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* ======================================Page 1====================================== */}
          {step === 1 && (
            <div>
               <div className='py-20 space-y-10'>
                  <div>
                    <label className='flex items-center'>Type of Use<span className='pl-2 text-[7px] text-red-500'><FaStarOfLife/></span></label>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 py-3'>
                        <div className='flex gap-3 items-center'><input type="radio" className='w-5 h-5 cursor-pointer' name='visa'/><label>For Visa Application</label></div>
                        <div className='flex gap-3 items-center'><input type="radio" className='w-5 h-5 cursor-pointer' name='visa'/><label>For Travel Return Proof</label></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 md:gap-y-10  font-normal capitalize text-base">
                    <div className='flex flex-col gap-3'>
                      <label className='flex items-center'>Email<span className='pl-2 text-[7px] text-red-500'><FaStarOfLife/></span></label>
                      <input className='h-10 p-2 outline-none border rounded-md' type="email" />
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label className='flex items-center'>Mobile Number<span className='pl-2 text-[7px] text-red-500'><FaStarOfLife/></span></label>
                      <div className='flex items-center w-full  border rounded-md'>
                      <PhoneInput
                            required
                            className="pl-4 outline-none border-none phonecode  w-28"
                            international
                            name='code'
                            // defaultCountry="IN"
                            value={code}
                            onChange={setCode}
                      />
                      <input className=' h-10 w-full p-2 outline-none' type="tel" inputMode='numeric' pattern="[0-9]{10,}" title="Please enter a 10-digit number" />
                      </div>
                    </div>
                  </div>
                  <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    <div className='flex flex-col gap-3'>
                      <label className='flex items-center'>Mr/Ms<span className='pl-2 text-[7px] text-red-500'><FaStarOfLife/></span></label>
                      <select className='h-10 w-full border p-2 rounded-md outline-none'>
                        <option value="">Choose</option>
                        <option value="Mr.">Mr.</option>
                        <option value="Ms.">Ms.</option>
                        <option value="Mrs">Mrs.</option>
                      </select>
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label className='flex items-center'>Passenger Name<span className='pl-2 text-[7px] text-red-500'><FaStarOfLife/></span></label>
                      <input className='h-10 p-2 outline-none border rounded-md' type="text" />
                    </div>
                    <div className='flex flex-col gap-3'>
                      <label className='flex items-center'>Last Name</label>
                      <input className='h-10 p-2 outline-none border rounded-md' type="text" />
                    </div>
                  </div>
              </div>
              <button
                type="button"
                onClick={nextPage}
                className="bg-white border shadow-lg  text-main hover:text-white font-medium tracking-wider transition-all duration-150 py-2 px-4 rounded-lg hover:bg-main"
              >
                Next
              </button>
            </div>
          )}
          {/* ======================================Page 2 ====================================== */}
          {step === 2 && (
            <div>
              <div className='py-20 space-y-2'>
                  <p>Total Amount</p>
                  <p>Price: $ 0.00</p>
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
                onClick={()=> navigate('/payment-success')}
                  type="submit"
                  className="bg-white border shadow-lg  text-main hover:text-white font-medium tracking-wider transition-all duration-150 py-2 px-4 rounded-lg hover:bg-main"
                >
                  Buy Now
                </button>
              </div>
            </div>
          )}
         
        </form>
      </div>
    </div>
  );
};

export default MultiStepForm;
