/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableCell, TableRow } from '@mui/material';
import { FaTrash } from 'react-icons/fa';


interface PriceInterface{
    index:number,
    price:{
        _id:string,
        countryName:string,
        currencySymbol:string,
        baseRate:number,
        roundTripRate:number,
        fastProcessSurCharge:number,
        flightWithHotelSurCharge:number
    },
    priceModalHandler:(value: any)=>void,
    deleteModalHandler:(value: any)=>void,
}

const SingleCountryWisePrice:React.FC<PriceInterface> = ({index,price,priceModalHandler,deleteModalHandler}) => {

    return (
        <TableRow>
            <TableCell><div className='text-center'>{index+1}</div></TableCell>
            <TableCell><div className='text-left capitalize'>{price.countryName}</div></TableCell>
            <TableCell><div className='text-center'>{price.currencySymbol}</div></TableCell>
            <TableCell><div className='text-center'>{price.baseRate}</div></TableCell>
            <TableCell><div className='text-center'>{price.roundTripRate}</div></TableCell>
            <TableCell><div className='text-center'>{price.fastProcessSurCharge}</div></TableCell>
            <TableCell><div className='text-center'>{price.flightWithHotelSurCharge}</div></TableCell>
            <TableCell>
                <div className='flex justify-center gap-2 items-center'>
                    <button onClick={()=>priceModalHandler(price)} className="cursor-pointer bg-main px-5 py-1 rounded-sm text-white hover:bg-green-600">Update</button>
                    <button onClick={()=>deleteModalHandler({_id:price._id,countryName:price.countryName})}><FaTrash className='w-4 h-4 hover:text-red-600'/></button>
                </div>
            </TableCell>
        </TableRow>
    )
}

export default SingleCountryWisePrice