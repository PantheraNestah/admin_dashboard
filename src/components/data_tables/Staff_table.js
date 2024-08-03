import * as React from 'react';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { type } from '@testing-library/user-event/dist/type';
import profile_placeholder from '../../assets/img/profile_placeholder.jpg';
import axios from 'axios';
import api from '../../utils/Api';

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

const processStaffObj = (staff_obj) => {
    return {
        id: staff_obj.id,
        image: (staff_obj.photo != null) ? `http://localhost:8080/files/staffs/photo?filename=${staff_obj.photo}` : profile_placeholder,
        name: staff_obj.name,
        department: staff_obj.department,
        phone: staff_obj.phone,
        email: staff_obj.email
    }
}
const fetchStaff = async () => {
    const auth_state = (localStorage.getItem("auth_state") !== null) ? JSON.parse(localStorage.getItem("auth_state")) : null;
    if (auth_state === null) {
        return;
    }
    if (auth_state !== null) {
        const response = await api('http://localhost:8080/api/staffs/all', {
            method: 'GET',
        });
        const staff_objs = response.data.staffs.map((staff) => processStaffObj(staff));
        return (staff_objs)
    }
}

export default function Staff_table(props) {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        const staffs = fetchStaff().then((staffs) => {
            console.log(staffs);
            setRecords(staffs);
        });
    }, []);

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