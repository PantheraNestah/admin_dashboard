import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { type } from '@testing-library/user-event/dist/type';
import profile_placeholder from '../../assets/img/profile_placeholder.jpg';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import api from '../../utils/Api';
import { isTokenExpired } from '../../utils/checkTokenExpiry';

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

const API_URL = process.env.REACT_APP_API_URL;
const processStaffObj = (staff_obj) => {

    return {
        id: staff_obj.id,
        image: (staff_obj.photo != null) ? `https://meladenproperties.tech:8443/files/staffs/photo?filename=${staff_obj.photo}` : profile_placeholder,
        name: staff_obj.name,
        department: staff_obj.department,
        phone: staff_obj.phone,
        email: staff_obj.email
    }
}
const fetchStaff = async (auth_state) => {
    if (auth_state === null) {
        return;
    }
    if (!isTokenExpired(auth_state.expiry)) {
        const response = await api(`${API_URL}/staffs/all`, {
            method: 'GET',
            token: auth_state.token
        });
        const staff_objs = response.data.staffs.map((staff) => processStaffObj(staff));
        return (staff_objs)
    }
}

export default function Staff_table(props) {
    const [records, setRecords] = useState([]);
    const authState = useContext(AuthContext);

    useEffect(() => {
        const staffs = fetchStaff(authState.authState).then((staffs) => {
            //console.log(staffs);
            setRecords(staffs);
        });
    }, [authState]);

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
                getRowHeight={() => 75}
            />
        </div>
    );
};