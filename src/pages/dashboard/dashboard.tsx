import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, Pagination } from '@mui/material';
import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";


const data = [
  { id: 1, name: 'John Doe', place: 'New York' },
  { id: 2, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 3, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 4, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 5, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 6, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 7, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 8, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 9, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 10, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 11, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 12, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 13, name: 'Jane Smith', place: 'Los Angeles' },
  { id: 14, name: 'Jane Smith', place: 'Los Angeles' },
  // Add more data as needed
];


const rowsPerPage = 6;


const AdminDashboard = () => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(1);

  const [status, setStatus] = useState('Pending');

  const toggleStatus = () => {
    if (
      window.confirm(
        `Are you sure you want to change status to ${
          status === 'Pending' ? 'Complete' : 'Pending'
        }?`
      )
    ) {
      setStatus(status === 'Pending' ? 'Complete' : 'Pending');
    }
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, id]);
    } else {
      setSelectedRows(selectedRows.filter(rowId => rowId !== id));
    }
  };

  const isSelected = (id) => selectedRows.indexOf(id) !== -1;

  const currentRows = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

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
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Place</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentRows.map((row) => {
            const isItemSelected = isSelected(row.id);
            return (
              <TableRow key={row.id} selected={isItemSelected}>
                <TableCell>
                  <Checkbox
                    checked={isItemSelected}
                    onChange={(event) => handleCheckboxChange(event, row.id)}
                  />
                  {row.id}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.place}</TableCell>
                <TableCell>
                <div className="flex items-center">
                    <button
                      onClick={toggleStatus}
                      className={`relative inline-flex flex-shrink-0 h-6 w-12 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none ${
                        status === 'Pending'
                          ? 'bg-yellow-500 hover:bg-yellow-600'
                          : 'bg-green-500 hover:bg-green-600'
                      }`}
                    >
                      <span
                        className={`sr-only ${
                          status === 'Pending' ? 'translate-x-0' : 'translate-x-6'
                        }`}
                      >
                        {status}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200 ${
                          status === 'Pending' ? 'translate-x-0' : 'translate-x-6'
                        }`}
                      ></span>
                    </button>
                    <span className="ml-3">{status}</span>
                  </div>
                </TableCell>
                <TableCell><p className='bg-gray-400 hover:bg-gray-500 cursor-pointer px-5 py-1 rounded-sm w-fit text-white' onClick={()=>navigate('/dashboard/:name')}>view</p></TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <Pagination
        className='float-right py-3'
        count={Math.ceil(data.length / rowsPerPage)}
        page={page}
        onChange={handleChangePage}
      />
    </TableContainer>
      </div>
    </main>
  )
}

export default AdminDashboard