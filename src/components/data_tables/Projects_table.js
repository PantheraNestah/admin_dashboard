import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import api from '../../utils/Api';
import { isTokenExpired } from '../../utils/checkTokenExpiry';
import { useProjslist } from '../../context/Proj_names_ctx';

const columns = [
    {field: 'id', headerName: 'ID', width: 90},
    {field: 'project', headerName: 'Name', width: 150},
    {field: 'value', headerName: 'Value', width: 150},
    {field: 'clients', headerName: 'Clients No.',type: 'Number', width: 90},
]

export default function Projects_table(props) {
    const [records, setRecords] = useState([]);
    const { projs_list } = useProjslist();
    const [projects_local, setProjects_local] = useState(projs_list)

    useEffect(() => {
        setProjects_local(projs_list)
    }, [projs_list])
    return (
        <div style={{height: 400, width: '100%'}}>
            <DataGrid 
                rows={projects_local} 
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
