/* eslint-disable @typescript-eslint/no-explicit-any */
import baseURL from '../baseUrl'


export const getOrders = async() => {
    try{
        const response = await baseURL.get(`/admin/get-orders`);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error getting orders ${error.message}`);
        throw new Error(`Error getting orders ${error.message}`);
    }
}


export const uploadTicket = async(orderId:string,ticket:File) => {
    try{
        const formData = new FormData()
        formData.append('ticket',ticket)

        const response = await baseURL.post(`/admin/upload-ticket/${orderId}`,formData,{
            headers:{'Content-Type' : 'multipart/form-data'}
        });
        
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error uploading invoice ${error.message}`);
        throw new Error(`Error uploading invoice ${error.message}`);
    }
}


export const getOrderDetails = async(orderId:string) => {
    try{
        const response = await baseURL.get(`/admin/get-single-order/${orderId}`);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error getting order status ${error.message}`);
        throw new Error(`Error getting order status ${error.message}`);
    }
}

export const getCountryWisePriceList = async()=>{
    try{
        const response = await baseURL.get(`/admin/getPriceList`);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error getting price list ${error.message}`);
        throw new Error(`Error getting price list ${error.message}`);
    }
}

export const addPrice = async(price:any)=>{
    try{
        const response = await baseURL.post(`/admin/addPrice`,price);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error adding price ${error.message}`);
        throw new Error(`Error adding price ${error.message}`);
    }
}

export const updatePrice = async(price:any)=>{
    try{
        const response = await baseURL.put(`/admin/updatePrice`,price);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error updating price ${error.message}`);
        throw new Error(`Error updating price ${error.message}`);
    }
}

export const deletePrice = async(_id:string)=>{
    try{
        const response = await baseURL.patch(`/admin/deletePrice`,{_id});
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error updating price ${error.message}`);
        throw new Error(`Error updating price ${error.message}`);
    }
}