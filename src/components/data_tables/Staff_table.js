import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { type } from '@testing-library/user-event/dist/type';
import profile_placeholder from '../../assets/img/profile_placeholder.jpg';

const columns = [
    { 
        field: 'image', 
        headerName: '', 
        width: 60, 
        renderCell: (params) => (
            <img src={params.value} alt="profile" style={{ width: '50px', height: '50px', borderRadius: "50%" }} />
        ) 
    },
    {field: 'name', headerName: 'Name', width: 90},
    {field: 'department', headerName: 'Department', width: 150},
    {field: 'phone', headerName: 'Phone', width: 150},
    {field: 'email', headerName: 'Email', width: 150},
]

const rows = [
    {id: 1, image: profile_placeholder, name: 'John Doe', department: 'HR', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 2, image: profile_placeholder, name: 'John Doe', department: 'Accounts', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 3, image: profile_placeholder, name: 'John Doe', department: 'Project Manager', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 4, image: profile_placeholder, name: 'John Doe', department: 'Senior Developer', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 5, image: profile_placeholder, name: 'John Doe', department: 'Software Developer', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 6, image: profile_placeholder, name: 'John Doe', department: 'Product Designer', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 7, image: profile_placeholder, name: 'John Doe', department: 'Software Developer', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 8, image: profile_placeholder, name: 'John Doe', department: 'Sales', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 9, image: profile_placeholder, name: 'John Doe', department: 'Support', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 10, image: profile_placeholder, name: 'John Doe', department: 'IT', phone: '0712345678', email: 'johndoe@gmail.com'},
]

export default function Staff_table() {
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid 
                rows={rows} 
                columns={columns} 
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]} 
                checkboxSelection 
                getRowHeight={() => 75}
            />
        </div>
    );
};