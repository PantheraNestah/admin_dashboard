import React, { useState, useEffect, useContext } from "react";
import "./modal.scss";
import AuthContext from '../../context/AuthContext';
import { useProjslist } from '../../context/Proj_names_ctx';
import { useClients } from "../../context/Proj_names_ctx";
import api from "../../utils/Api";

const Email_modal = () => {
    const auth_state = useContext(AuthContext);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitFailure, setSubmitFailure] = useState(false);
    const [prodSearch, setProdSearch] = useState("");
    const [prodFound, setProdFound] = useState(false);
    const [message, setMessage] = useState("");
    const { projs_list } = useProjslist();
    const [projects_local, setProjects_local] = useState(projs_list)
    const { clients_list } = useClients();
    const [all_clients_list, setAll_clients_list] = useState(clients_list);
    const [clients_to_msg, setClients_to_msg] = useState([]);
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        setAll_clients_list(clients_list)
    }, [clients_list])
    useEffect(() => {
        setProjects_local(projs_list)
    }, [projs_list])
    useEffect(() => {
        if (all_clients_list.length > 0) {
            const clients = all_clients_list.find(obj => obj.id == prodSearch)?.clients || [];
            setClients_to_msg(clients);
        }
    }, [all_clients_list, prodSearch, prodFound]);
    const handle_prod_search = (e) => {
        projects_local.find((proj) => {
            if (proj.id == prodSearch) {
                setProdFound(true);
                /* if (all_clients_list.length > 0) {
                    const clients = all_clients_list.filter((obj) => {
                        return obj.prodId == proj.id
                    });
                    setClients_to_msg(clients);
                } */
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
            subject: "Product Update",
            message: message,
            prodId: prodSearch,
            clients: clients_to_msg,
            date: regDate
        };
        console.log(json_data);
        api(`${API_URL}/clients/email`,
            {
                method: "POST",
                token: auth_state.authState.token,
                body: JSON.stringify(json_data)
            }
        ).then((response) => {
            console.log(response.statusCode);
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
            }
        });
    };

    return (
        <section id="emailModal" class="modal fade messageModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title myModal-title">Email all clients</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-form">
                            <form id="emailForm" class="d-flex flex-column justify-content-between" onSubmit={handle_submission}>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodId">Product Id</label>
                                    <span class="d-flex justify-content-between searchField">
                                        <input class="text-center" type="text" name="prodId" id="prodIdEdit" placeholder="search by Id" onChange={(e) => {setProdSearch(e.target.value)}} />
                                        <span id="searchProdId" class="text-center"  onClick={handle_prod_search}>
                                            <i class="bi bi-search"></i>
                                        </span>
                                    </span>
                                    {/* <input class="text-center" type="text" name="prodId" id="prodId" placeholder="" /> */}
                                    {prodFound &&
                                        <span class="confirm-product d-flex align-items-center justify-content-center">
                                            <i class="bi bi-check-circle-fill me-2"></i>
                                            <span>Product found</span>
                                        </span>
                                    }
                                </span>
                                <span class="message-field d-flex flex-column">
                                    <label for="message">Compose Message</label>
                                    <textarea name="message" id="message" placeholder="Write message here..." onChange={(e) => {setMessage(e.target.value)}}></textarea>
                                </span>
                                <span class="operation-response mx-auto">
                                    {submitSuccess && 
                                        <label class="success mx-auto d-flex align-items-center">
                                            <span>Sent Successfully</span>
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
                                    <input type="submit" value="Send" class="btn btn-primary" style={{width: "60px", height: "38px"}} />
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{width: "60px", height: "38px"}}>Close</button>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Email_modal;