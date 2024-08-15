import React, { useState, useEffect } from 'react';
import "./modal.scss";
import api from "../../utils/Api";
import AuthContext from '../../context/AuthContext';
import { useProjslist } from '../../context/Proj_names_ctx';

const Prod_edit_modal = (props) => {
    const [prodSearch, setProdSearch] = useState("");
    const [prodFound, setProdFound] = useState(false);
    const [prodNotFound, setProdNotFound] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitFailure, setSubmitFailure] = useState(false);
    const [prodName, setProdName] = useState("");
    const [prodValue, setProdValue] = useState("");
    const [clients, setClients] = useState("");
    const { projs_list } = useProjslist();
    const [projects_local, setProjects_local] = useState(projs_list)

    useEffect(() => {
        setProjects_local(projs_list)
    }, [projs_list])
    const handle_prod_search = (e) => {
        e.preventDefault();
        projects_local.find((proj) => {
            if (proj.id == prodSearch) {
                setProdName(proj.project);
                setProdValue(proj.value);
                setClients(proj.clients);
                setProdFound(true);
            }
            if (!prodFound) {
                setProdNotFound(true);
                setTimeout(() => {
                    setProdNotFound(false);
                }, 3800);
            }
        });
    };

    return (
        <section id="prodModalEdit" class="modal fade prodModalEdit">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title myModal-title">Edit Project</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-form">
                            <form action="" id="prodForm" class="d-flex flex-column justify-content-between">
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodIdEdit">Search Id</label>
                                    <span class="d-flex justify-content-between searchField">
                                        <input class="text-center" type="text" name="prodId" id="prodIdEdit" placeholder="search by Id" onChange={(e) => {setProdSearch(e.target.value)}} />
                                        <span id="searchProdId" class="text-center" onClick={handle_prod_search}>
                                            <i class="bi bi-search"></i>
                                        </span>
                                    </span>
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodNameEdit">Name</label>
                                    <input class="text-center" type="text" name="prodName" id="prodNameEdit" placeholder="e.g The real homes" value={prodName} disabled />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodValueEdit">Value</label>
                                    <input class="text-center" type="text" name="prodValue" id="prodValueEdit" placeholder="e.g 19.2M" value={prodValue} disabled />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="">Photo</label>
                                    <input type="file" class="ms-2" name="prodPhoto" id="prodPhoto" placeholder="Upload Photo" disabled />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="clientsEdit">Clients NO</label>
                                    <input class="text-center" type="text" name="clients" id="clientsEdit" value={clients} disabled />
                                </span>
                                <span class="operation-response mx-auto">
                                    <label class="success mx-auto d-none align-items-center">
                                        <span>Successfully Edited</span>
                                        <i class="bi bi-check-circle-fill"></i>
                                    </label>
                                    <label class="failure mx-auto d-none align-items-center">
                                        <span>Operation Failed!</span>
                                        <i class="bi bi-x-circle-fill"></i>
                                    </label>
                                </span>
                                <span class="modal-footer">
                                    <input type="submit" value="Save" class="btn btn-primary" style={{width: "60px", height: "38px"}} />
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

export default Prod_edit_modal;