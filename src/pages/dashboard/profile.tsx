/* eslint-disable @typescript-eslint/no-explicit-any */
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import { getOrderDetails, uploadTicket } from '../../api/apiConnections/adminConnections'
import moment from 'moment'
import { toast } from 'react-toastify'
import { Preloader } from '../../components'
import { OrderInterface } from '../../interfaces/orderInterface'

const UserProfile = () => {
  const {orderId}:any = useParams()
  const [singleOrder,setSingleOrder] = useState<OrderInterface | any | null>(null)
  const [ticket,setTicket] = useState<File | null>(null)
  const [loading,setLoading] = useState(false)

  const getSingleOrderData = async()=>{
    const response = await getOrderDetails(orderId)
    
    if(response?.status){
      setSingleOrder(response.data)
    }
  }

  useEffect(()=>{
    getSingleOrderData()
  },[])

  const submitTicket = async()=>{
    if(ticket){
      setLoading(true)
      const uploadResponse = await uploadTicket(singleOrder._id,ticket)
      setLoading(false)
      
      if(uploadResponse?.status){
        setSingleOrder((previous:any)=>({...previous,orderStatus:"Completed",ticketUrl:uploadResponse.data}))
        toast.success(uploadResponse.message)
        setTicket(null)
        // const fileInput = document.getElementById('file-input') as HTMLInputElement;
        // fileInput.value = '';

      }else{
        toast.error(uploadResponse.message)
      }
    }
  }


  return loading ? <Preloader/> : (
    <main>
        {/* Hader */}
           <Navbar/>
        {/* Hader */}
        <div className='py-10 w-10/12 mx-auto'>
          <div className='space-y-2 text-lg'>
            <h2><span className='font-bold underline'>E-mail</span> : {singleOrder?.email}</h2>
            <h2><span className='font-bold underline'>Mobile</span> : {singleOrder?.mobileNumber}</h2>
            <h2><span className='font-bold underline'>Country</span> : {singleOrder?.originCountry}</h2>
            <h2><span className='font-bold underline'>Travel Record</span></h2>
            <div className='ml-4'>
              <p>Service : {singleOrder?.serviceType}</p>
              <p>Type : {singleOrder?.tripType}</p>
              <p>Processing Type : {singleOrder?.processingSpeed}</p>
              <p>Purpose : {singleOrder?.purpose}</p>
              <p>From : {singleOrder?.journeyLocation.from}</p>
              <p>To : {singleOrder?.journeyLocation.to}</p>
              <p>No. of Travellers : {singleOrder?.passengerCount}</p>
              <div>Travellers Data :
                <div className='ml-4'>
                  {singleOrder?.passengerData.length ? singleOrder.passengerData.map((passenger:any,index:number)=>(
                    <p key={index}>{index+1}. {passenger.title} {passenger.firstName} {passenger.lastName}</p>
                  )) : null}
                </div>
              </div>
              {singleOrder?.date.startDate ? <p>Travel Date : {moment(singleOrder.date.startDate).format('D MMM YYYY')}</p> : null}
              {singleOrder?.date.returnDate ? <p>Return Date : {moment(singleOrder.date.returnDate).format('D MMM YYYY')}</p> : null}
              <p>Total Amount : {singleOrder?.currency} {singleOrder?.total}</p>
              <p>Payment Status : {singleOrder?.paymentStatus}</p>
              <p>Order Status : {singleOrder?.orderStatus}</p>
              <p>Ref. Id : {singleOrder?.referenceId}</p>
              {singleOrder?.createdAt && <p>Booking Time : {moment(singleOrder.createdAt).format('Do MMM YYYY, h:mm:ss a')}</p>}
            </div>
            {singleOrder?.ticketUrl && <iframe src={singleOrder.ticketUrl} width={200} height={300}></iframe>}
            {singleOrder?.paymentStatus == "Success" && <div className='flex flex-col justify-center items-center my-4 p-2 gap-2 shadow-2xl'>{singleOrder?.ticketUrl ? "Change Ticket" : "Upload Ticket"}
              <div className='text-center'>
                <input type='file' accept=".pdf" onChange={(event:any)=>setTicket(event.target.files[0])} id='file-input' name='ticket' />
              </div>
              <button onClick={submitTicket} className={`${ticket ? "bg-blue-600" : "bg-neutral-500"} px-2 py-1 text-white rounded`} disabled={!ticket}>Upload</button>
            </div>}
          </div>
        </div>
    </main>
  )
}

export default UserProfile