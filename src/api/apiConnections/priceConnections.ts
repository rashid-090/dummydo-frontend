/* eslint-disable @typescript-eslint/no-explicit-any */
import { priceRequestInterface } from '../../interfaces/priceInterface';
import baseURL from '../baseUrl'


export const getPrice = async(data:priceRequestInterface) => {
    try{
        const response = await baseURL.post(`/price/getTotal`,data);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error getting price ${error.message}`);
        throw new Error(`Error getting price ${error.message}`);
    }
}



