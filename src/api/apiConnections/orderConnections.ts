/* eslint-disable @typescript-eslint/no-explicit-any */
import baseURL from '../baseUrl'


export const placeOrder = async(data:object) => {
    try{
        const response = await baseURL.post(`/order/place-order`,data);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error placing order ${error.message}`);
        throw new Error(`Error placing order ${error.message}`);
    }
}


export const createPaymentSession = async(data:{total:number,orderId:string,currency:string}) => {
    try{
        const response = await baseURL.post(`/order/create-payment-session`,data);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error creating payment session ${error.message}`);
        throw new Error(`Error creating payment session ${error.message}`);
    }
}


export const getOrderStatus = async(referenceId:string) => {
    try{
        const response = await baseURL.get(`/order/get-order-status/${referenceId}`);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error getting order status ${error.message}`);
        throw new Error(`Error getting order status ${error.message}`);
    }
}

export const getPaymentStatus = async(orderId:string,paymentId:string) => {
    try{
        const response = await baseURL.patch(`/order/update-payment-status`,{orderId,paymentId});
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error getting order status ${error.message}`);
        throw new Error(`Error getting order status ${error.message}`);
    }
}

