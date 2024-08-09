import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { type } from '@testing-library/user-event/dist/type';
import profile_placeholder from '../../assets/img/profile_placeholder.jpg';
import AuthContext from '../../context/AuthContext';
import api from '../../utils/Api';
import { isTokenExpired } from '../../utils/checkTokenExpiry';
import { useClients } from '../../context/Proj_names_ctx';
import { useActiveProjId } from '../../context/Proj_names_ctx';

const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {field: 'name', headerName: 'Name', width: 150},
    {field: 'email', headerName: 'Email', width: 150},
    {field: 'phone', headerName: 'Phone', width: 150, cellClassName: "centerred_cell"},
]

export default function Clients_table(props) {
    const { clients_list } = useClients();
    const [all_clients_list, setAll_clients_list] = useState(clients_list);
    const [active_proj_clients, setActive_proj_clients] = useState([]);
    const { active_proj_id, setActive_proj_id } = useActiveProjId();
    const [isDefaultId, setIsDefaultId] = useState(true);
    
    useEffect(() => {
        if (clients_list.length > 0 && active_proj_id === 0) {
            setActive_proj_id(clients_list[0].id);
        }
    }, [clients_list, active_proj_id, setActive_proj_id]);
    // Update active_proj_clients when active_proj_id or clients_list change
    useEffect(() => {
        if (clients_list.length > 0) {
            //console.log("[ ALL CLIENTS LIST ] : ", clients_list);
            const projectClients = clients_list.find(proj => proj.id == active_proj_id)?.clients || [];
            setActive_proj_clients(projectClients);
            console.log("Current active proj's clients", projectClients);
        }
    }, [active_proj_id, clients_list]);
    
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid 
                rows={active_proj_clients} 
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