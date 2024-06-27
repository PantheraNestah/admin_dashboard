import React, {useEffect, useState} from 'react';
import "./modal.scss";
import axios from "axios";

const Prod_modal = ({ show, handleClose, product }) => {
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitFailure, setSubmitFailure] = useState(false);
    const [prodName, setProdName] = useState("");
    const [prodValue, setProdValue] = useState("");
    
    const handle_submission = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("prodName", prodName);
        formData.append("prodValue", prodValue);

        axios.post("http://localhost:5000/api/products", formData)
        .then(res => {
            if (res.data.status === "success") {
                setSubmitSuccess(true);
                setTimeout(() => {
                    setSubmitSuccess(false);
                    setProdName("");
                    setProdValue("");
                }, 5000);
            } else {
                setSubmitFailure(true);
                setTimeout(() => {
                    setSubmitFailure(false);
                }, 5000);
            }
        })
    };

    return (
        <section id="prodModal" class="modal fade prodModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title myModal-title">New Project</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-form">
                            <form action="" id="prodForm" class="d-flex flex-column justify-content-between" onSubmit={handle_submission} >
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodName">Name</label>
                                    <input class="text-center" type="text" name="prodName" id="prodName" placeholder="e.g The real homes" onChange={setProdName} />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodValue">Value</label>
                                    <input class="text-center" type="text" name="prodValue" id="prodValue" placeholder="e.g 19.2M, 500K" onChange={setProdValue} />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodPhoto">Photo</label>
                                    <input type="file" class="ms-2" id="prodPhoto" disabled />
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

export default Prod_modal;