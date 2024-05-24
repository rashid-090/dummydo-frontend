/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Pagination } from '@mui/material';
import { SetStateAction, useEffect, useState } from 'react';
import Navbar from './Navbar';
import { getOrders } from '../../api/apiConnections/adminConnections';
import { toast } from 'react-toastify';
import SingleOrder from './SingleOrder';


const rowsPerPage = 6;


const AdminDashboard = () => {
  const [page, setPage] = useState(1);
  const [orders,setOrders] = useState([])


  const getAllOrders = async()=>{
    const response = await getOrders()
    if(response?.status){
      setOrders(response.data)
    }else{
      toast.error(response.message)
    }
  }

  useEffect(()=>{
    getAllOrders()
  },[])


  const handleChangePage = (event: any, newPage: SetStateAction<number>) => {
    setPage(newPage);
  };


  return (
    <main>
        {/* Hader */}
        <Navbar/>
        {/* Hader */}
        <div className='py-10 w-10/12 mx-auto'>
        <TableContainer component={Paper}>
      <Table>
        <TableHead className='bg-gray-200'>
          <TableRow>
            <TableCell>Sl.No.</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell>Order Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders?.map((single:any,index:number) => {
            return (
              <SingleOrder key={single._id} single={single} index={index}/>
            );
          })}
        </TableBody>
      </Table>
      <Pagination
        className='float-right py-3'
        count={Math.ceil(orders.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
      />
    </TableContainer>
      </div>
    </main>
  )
}

export default AdminDashboard