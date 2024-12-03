import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Button, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import RemoteServices from '../../RemoteServices/RemoteService';

const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [listdata, setlistdata] = useState({})
  const [data] = useState([
    { id: 1, title: 'Title 1', description: 'Description 1', date: '2024-12-01', image: 'image1.jpg', adImage: 'ad1.jpg', postBy: 'User 1' },
    { id: 2, title: 'Title 2', description: 'Description 2', date: '2024-12-02', image: 'image2.jpg', adImage: 'ad2.jpg', postBy: 'User 2' },
    // Add more rows as needed
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (id) => {
    // Handle delete logic here
    console.log('Delete:', id);
  };

  const handleUpdate = (id) => {
    // Handle update logic here
    console.log('Update:', id);
  };

  useEffect(() => {
  
    RemoteServices.getlistdata().then((res)=>{
      setlistdata(res)
      console.log(res)
    
    })
    
  },[])
  return (
    <div className="container px-4 flex-grow  my-10">
      <TableContainer className="bg-white rounded-lg shadow-lg overflow-hidden">
        <Table aria-label="pagination table">
          <TableHead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <TableRow>
              <TableCell className="font-semibold text-lg px-6 py-4">Title</TableCell>
              <TableCell className="font-semibold text-lg px-6 py-4">Description</TableCell>
              <TableCell className="font-semibold text-lg px-6 py-4">Date</TableCell>
              <TableCell className="font-semibold text-lg px-6 py-4">Image Preview</TableCell>
              <TableCell className="font-semibold text-lg px-6 py-4">Ad Image Preview</TableCell>
              <TableCell className="font-semibold text-lg px-6 py-4">Post By</TableCell>
              <TableCell className="font-semibold text-lg px-6 py-4">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              <TableRow
                key={row.id}
                hover
                className="transition-all duration-200 ease-in-out hover:bg-gray-100"
              >
                <TableCell className="px-6 py-4">{row.title}</TableCell>
                <TableCell className="px-6 py-4">{row.description}</TableCell>
                <TableCell className="px-6 py-4">{row.date}</TableCell>
                <TableCell className="px-6 py-4">
                  <img src={row.image} alt={row.title} className="w-16 h-16 object-cover rounded-md shadow-md" />
                </TableCell>
                <TableCell className="px-6 py-4">
                  <img src={row.adImage} alt={row.title} className="w-16 h-16 object-cover rounded-md shadow-md" />
                </TableCell>
                <TableCell className="px-6 py-4">{row.postBy}</TableCell>
                <TableCell className="px-6 py-4 flex items-center justify-start space-x-2">
                  <IconButton
                    color="primary"
                    onClick={() => handleUpdate(row.id)}
                    className="hover:bg-indigo-200 p-2 rounded-full"
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="secondary"
                    onClick={() => handleDelete(row.id)}
                    className="hover:bg-red-200 p-2 rounded-full"
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="bg-gray-50 py-3 rounded-b-lg"
      />
    </div>
  );
};

export default PaginationTable;
