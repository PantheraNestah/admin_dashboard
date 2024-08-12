import React, { useState, useEffect, useContext } from 'react';
import "./modal.scss";
import AuthContext from '../../context/AuthContext';
import { useProjslist } from '../../context/Proj_names_ctx';
import api from "../../utils/Api";

const Client_modal = () => {
    const auth_state = useContext(AuthContext);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitFailure, setSubmitFailure] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [prodSearch, setProdSearch] = useState("");
    const [prodFound, setProdFound] = useState(false);
    const [prod_name, setProd_name] = useState("");
    const { projs_list } = useProjslist();
    const [projects_local, setProjects_local] = useState(projs_list)
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        setProjects_local(projs_list)
    }, [projs_list])
    const handle_prod_search = (e) => {
        projects_local.find((proj) => {
            if (proj.id == prodSearch) {
                setProdFound(true);
                setProd_name(proj.project);
                setTimeout(() => {
                    setProdFound(false);
                }, 3800);
            }
        });
    };
    const handle_submission = (e) => {
        e.preventDefault();
        const today = new Date()
        var regDate = today.toISOString().slice(0, 10)
        const json_data = {
            name: name,
            email: email,
            phone: phone,
            prodId: prodSearch,
            registrationDate: regDate
        };
        api(`${API_URL}/clients/new`,
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
                }, 2000);
            }
        });
    };

    return (
        <section id="clientModal" class="modal fade clientModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title myModal-title">Client Registration</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-form">
                            <form action="" id="clientForm" class="d-flex flex-column justify-content-between col-11" onSubmit={handle_submission}>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="productId">Product Id</label>
                                    <span class="d-flex justify-content-between searchField">
                                        <input class="text-center" type="text" name="prodId" id="prodIdEdit" placeholder="search by Id" onChange={(e) => {setProdSearch(e.target.value)}} />
                                        <span id="searchProdId" class="text-center" onClick={handle_prod_search}>
                                            <i class="bi bi-search"></i>
                                        </span>
                                    </span>
                                    {/* <input class="text-center" type="text" name="prodId" id="productId" placeholder="search by id" /> */}
                                    {prodFound &&
                                        <span class="confirm-product d-flex align-items-center justify-content-center">
                                            <i class="bi bi-check-circle-fill me-2"></i>
                                            <span>{prod_name}</span>
                                        </span>
                                    }
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="name">Name</label>
                                    <input class="text-center" type="text" name="name" id="clientName" placeholder="e.g John Doe" onChange={(e) => {setName(e.target.value)}} />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="clientMail">Email</label>
                                    <input class="text-center" type="text" name="email" id="clientMail" placeholder="clientname@example.com" onChange={(e) => {setEmail(e.target.value)}} />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="clientPhone">Phone</label>
                                    <input class="text-center" type="text" name="phone" id="clientPhone" placeholder="+254798765432" onChange={(e) => {setPhone(e.target.value)}} />
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
    );
};

export default Client_modal;