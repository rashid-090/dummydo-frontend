/* eslint-disable @typescript-eslint/no-explicit-any */
import baseURL from '../baseUrl'


export const searchAirport = async(searchText:string) => {
    try{
        const response = await baseURL.get(`/airport/getAirport?searchText=${searchText}`);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error getting airport ${error.message}`);
        throw new Error(`Error getting airport ${error.message}`);
    }
}



