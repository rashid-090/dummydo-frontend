import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper, Pagination } from '@mui/material';
import { useState } from 'react';
import Navbar from './Navbar';



const data = [
  { id: 1, name: 'John Doe', mobile: '123-456-7890', place: 'New York' },
  { id: 2, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 3, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 4, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 5, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 6, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 7, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 8, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 9, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 10, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 11, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 12, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 13, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  { id: 14, name: 'Jane Smith', mobile: '987-654-3210', place: 'Los Angeles' },
  // Add more data as needed
];


const rowsPerPage = 6;


const AdminDashboard = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(1);

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
            <TableCell>Mobile</TableCell>
            <TableCell>Place</TableCell>
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
                <TableCell>{row.mobile}</TableCell>
                <TableCell>{row.place}</TableCell>
                <TableCell className='hover:text-main cursor-pointer hover:underline'>view</TableCell>
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