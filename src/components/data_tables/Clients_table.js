import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { type } from '@testing-library/user-event/dist/type';
import profile_placeholder from '../../assets/img/profile_placeholder.jpg';
import api from '../../utils/Api';

const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'email', headerName: 'Email', width: 150},
    {field: 'phone', headerName: 'Phone', width: 150, cellClassName: "centerred_cell"},
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

var projnames_list = [];
var clients_list = [];
const projname_n_id = (proj_obj) => {
    return {
        id: proj_obj.id,
        project: proj_obj.prodName,
    }
};
const client_obj = (client) => {

    return {
        id: client.id,
        name: client.name,
        email: client.email,
        phone: client.phone,
    }
};
const process_clients = (proj_obj) => {
    return {
        id: proj_obj.id,
        clients: proj_obj.clientDtos.map((client) => client_obj(client)),
    }
};
const fetchClients = async () => {
    const auth_state = (localStorage.getItem("auth_state") !== null) ? JSON.parse(localStorage.getItem("auth_state")) : null;
    if (auth_state === null) {
        return;
    }
    if (auth_state !== null) {
        const response = await api('http://localhost:8080/api/projects/all', {
            method: 'GET',
        });
        clients_list = response.data.projects.map((proj) => process_clients(proj));
    }
}

export default function Clients_table(props) {
    const [records, setRecords] = useState([]);
    
    useEffect(() => {
        fetchClients().then(() => {
            //setRecords(clients_list[0].clients);
            //console.log(clients_list);
            setRecords(clients_list[0].clients);
        });
    }, [clients_list, records]);
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid 
                rows={records} 
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
};