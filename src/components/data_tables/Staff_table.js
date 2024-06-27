import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { type } from '@testing-library/user-event/dist/type';

const columns = [
    {field: 'name', headerName: 'Name', width: 90},
    {field: 'department', headerName: 'Department', width: 150},
    {field: 'phone', headerName: 'Phone', width: 150},
    {field: 'email', headerName: 'Email', width: 150},
]

const rows = [
    {id: 1, name: 'John Doe', department: 'HR', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 2, name: 'John Doe', department: 'Accounts', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 3, name: 'John Doe', department: 'Project Manager', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 4, name: 'John Doe', department: 'Senior Developer', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 5, name: 'John Doe', department: 'Software Developer', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 6, name: 'John Doe', department: 'Product Designer', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 7, name: 'John Doe', department: 'Software Developer', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 8, name: 'John Doe', department: 'Sales', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 9, name: 'John Doe', department: 'Support', phone: '0712345678', email: 'johndoe@gmail.com'},
    {id: 10, name: 'John Doe', department: 'IT', phone: '0712345678', email: 'johndoe@gmail.com'},
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
            />
        </div>
    );
};