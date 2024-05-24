/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import { TableCell, TableRow } from '@mui/material';


const SingleOrder = ({single,index}:any) => {
    const navigate = useNavigate()
    return (
        <TableRow>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{single.email}</TableCell>
            <TableCell>{single.originCountry}</TableCell>
            <TableCell>{single.paymentStatus}</TableCell>
            <TableCell>{single.orderStatus}</TableCell>
            <TableCell><p className='bg-gray-400 hover:bg-gray-500 cursor-pointer px-5 py-1 rounded-sm w-fit text-white' onClick={() => navigate(`/dashboard/${single._id}`)}>View</p></TableCell>
        </TableRow>
    )
}

export default SingleOrder