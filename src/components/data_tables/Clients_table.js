import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { type } from '@testing-library/user-event/dist/type';

const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'email', headerName: 'Email', width: 150},
    {field: 'phone', headerName: 'Phone', width: 150},
]

const rows = [
    {id: 1, name: 'John Doe', email: 'johndoe@gmail.com', phone: '0712345678'},
    {id: 2, name: 'John Doe', email: 'johndoe@gmail.com', phone: '0712345678'},
    {id: 3, name: 'John Doe', email: 'johndoe@gmail.com', phone: '0712345678'},
    {id: 4, name: 'John Doe', email: 'johndoe@gmail.com', phone: '0712345678'},
    {id: 5, name: 'John Doe', email: 'johndoe@gmail.com', phone: '0712345678'},
    {id: 6, name: 'John Doe', email: 'johndoe@gmail.com', phone: '0712345678'},
    {id: 7, name: 'John Doe', email: 'johndoe@gmail.com', phone: '0712345678'},
    {id: 8, name: 'John Doe', email: 'johndoe@gmail.com', phone: '0712345678'},
    {id: 9, name: 'John Doe', email: 'johndoe@gmail.com', phone: '0712345678'},
    {id: 10, name: 'John Doe', email: 'johndoe@gmail.com', phone: '0712345678'},
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