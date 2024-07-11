import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { type } from '@testing-library/user-event/dist/type';

const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {field: 'project', headerName: 'Name', width: 150},
    {field: 'value', headerName: 'Value', width: 150},
    {field: 'clients', headerName: 'Clients No.',type: 'Number', width: 90},
]

const rows = [
    {id: 1, project: 'Project 1', value: 'KSH 100 K', clients: 10},
    {id: 2, project: 'Project 2', value: 'KSH 20 M', clients: 20},
    {id: 3, project: 'Project 3', value: 'KSH 30 M', clients: 30},
    {id: 4, project: 'Project 4', value: 'KSH 400 K', clients: 40},
    {id: 5, project: 'Project 5', value: 'KSH 50 M', clients: 50},
    {id: 6, project: 'Project 6', value: 'KSH 60 M', clients: 60},
    {id: 7, project: 'Project 7', value: 'KSH 700 K', clients: 70},
    {id: 8, project: 'Project 8', value: 'KSH 80 M', clients: 80},
    {id: 9, project: 'Project 9', value: 'KSH 900 K', clients: 90},
]

export default function Projects_table() {
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
                getRowHeight={() => 65}
            />
        </div>
    );
}