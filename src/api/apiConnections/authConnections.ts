/* eslint-disable @typescript-eslint/no-explicit-any */
import baseURL from '../baseUrl'


export const adminSignIn = async(email:string,password:string) => {
    try{
        const response = await baseURL.post(`/adminAuth/signin`,{email,password});
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error signing in ${error.message}`);
        throw new Error(`Error signing in ${error.message}`);
    }
}


export const adminSignOut = async()=>{
    try{
        const response = await baseURL.delete(`/adminAuth/signout`);
        if (response) {
            return response.data
        }
    }catch(error:any){
        console.error(`Error in sign out: ${error.message}`);
    }
}