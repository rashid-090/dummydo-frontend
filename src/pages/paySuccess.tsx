/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from 'react-router-dom'
import { paysuccess } from '../assets'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { getPaymentStatus } from '../api/apiConnections/orderConnections'

const PaymentComplete = () => {
  const { orderId,referenceId } = useParams()


  const paymentStatusUpdation = async()=>{
    const paymentId:any = localStorage.getItem("ziinaId")
    if(orderId && paymentId?.length){
      const response = await getPaymentStatus(orderId,paymentId)
      localStorage.removeItem("ziinaId")
      if(response?.status){
        toast.success(response.message)
      }else{
        toast.error(response.message)
      }
    }
  }

  useEffect(()=>{
    paymentStatusUpdation()
  },[])

  return (
    <div className='h-screen capitalize w-full flex flex-col gap-10 justify-center items-center'>
      <img className='' src={paysuccess} alt="done" />
      <h1>Payment successfully completed</h1>
      <p className='text-green-600'>Your booking reference id : {referenceId}</p>
      <Link className='hover:underline' to={'/'}>Go to Home</Link>
    </div>
  )
}

export default PaymentComplete