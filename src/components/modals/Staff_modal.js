import React, { useState, useEffect, useContext } from "react";
import "./modal.scss";
import AuthContext from '../../context/AuthContext';
import api from "../../utils/Api";

const Staff_modal = (props) => {
    const auth_state = useContext(AuthContext);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitFailure, setSubmitFailure] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("");
    const [department, setDepartment] = useState("");
    const API_URL = process.env.REACT_APP_API_URL;

    const handle_submission = (e) => {
        e.preventDefault();
        const json_data = {
            name: name,
            email: email,
            phone: phone,
            role: role,
            department: department,
        };
        api(`${API_URL}/staffs/new`,
            {
                method: "POST",
                token: auth_state.authState.token,
                body: JSON.stringify(json_data)
            }
        ).then((response) => {
            //console.log(response.statusCode);
            if (response.statusCode == 201 || response.statusCode == 200) {
                setSubmitSuccess(true);
                setTimeout(() => {
                    setSubmitSuccess(false);
                }, 3800);
            }
            else {
                setSubmitFailure(true);
                setTimeout(() => {
                    setSubmitFailure(false);
                }, 3800);
            };
        });
    };
    return (
        <section id="staffModal" class="modal fade staffModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title myModal-title">staff Registration</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-form">
                            <form action="" id="staffForm" class="d-flex flex-column justify-content-between col-11" onSubmit={handle_submission}>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="staffName">Name</label>
                                    <input class="text-center" type="text" name="name" id="staffName" placeholder="e.g John Doe" onChange={(e) => {setName(e.target.value)}} />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="staffMail">Email</label>
                                    <input class="text-center" type="text" name="email" id="staffMail" placeholder="staffname@example.com" onChange={(e) => {setEmail(e.target.value)}} />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="staffPhone">Phone</label>
                                    <input class="text-center" type="text" name="phone" id="staffPhone" placeholder="+254798765432" onChange={(e) => {setPhone(e.target.value)}} />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="staffRole">Role</label>
                                    <input class="text-center" type="text" name="role" id="staffRole" placeholder="e.g Staff" onChange={(e) => {setRole(e.target.value)}} />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="staffDept">Department</label>
                                    <input class="text-center" type="text" name="department" id="staffDept" placeholder="e.g I.T/Accounts" onChange={(e) => {setDepartment(e.target.value)}} />
                                </span>
                                <span class="operation-response mx-auto">
                                    {submitSuccess &&
                                        <label class="success mx-auto d-flex align-items-center">
                                            <span>Successfully added</span>
                                            <i class="bi bi-check-circle-fill"></i>
                                        </label>
                                    }
                                    {submitFailure &&
                                        <label class="failure mx-auto d-flex align-items-center">
                                            <span>Operation Failed!</span>
                                            <i class="bi bi-x-circle-fill"></i>
                                        </label>
                                    }
                                </span>
                                <span class="modal-footer">
                                    <input type="submit" value="Save" class="btn btn-primary" style={{width: "60px", height: "38px"}} />
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Staff_modal;