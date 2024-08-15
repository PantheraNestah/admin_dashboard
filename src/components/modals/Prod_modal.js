import React, {useEffect, useState, useContext} from 'react';
import "./modal.scss";
import circular_loading from "../../assets/img/circular_loading.gif";
import api from "../../utils/Api";
import AuthContext from '../../context/AuthContext';
import { save_file } from '../../utils/Api';

const Prod_modal = () => {
    const auth_state = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitFailure, setSubmitFailure] = useState(false);
    const [prodName, setProdName] = useState("");
    const [prodValue, setProdValue] = useState("");
    const [prodPhoto, setProdPhoto] = useState(null);
    const [submit_error, setSubmitError] = useState(false);
    const API_URL = process.env.REACT_APP_API_URL;
    
    const handle_submission = (e) => {
        const today = new Date()
        var regDate = today.toISOString().slice(0, 10)
        const formData = new FormData();
        let saved_prod_id;
        e.preventDefault();
        setLoading(true);
        const json_data = {
            "prodName": prodName,
            "prodValue": prodValue,
            "creationDate": regDate
        };
        if(json_data.prodValue.endsWith("M"))
        {
            var val = json_data.prodValue.slice(0, -1)
            json_data["prodValue"] = val * 1000000
        }else if(json_data.prodValue.endsWith("K"))
            {
                var val = json_data.prodValue.slice(0, -1)
                json_data["prodValue"] = val * 1000
            }
        try {
            api(`${API_URL}/projects/new`,
                {
                    method: "POST",
                    token: auth_state.authState.token,
                    body: JSON.stringify(json_data)
                }
            ).then((response) => {
                if (response.statusCode == 201) {
                    saved_prod_id = response.data.id;
                    setLoading(false);
                    setSubmitSuccess(true);
                    setTimeout(() => {
                        setSubmitSuccess(false);
                    }, 3800);
                    //formData.append("file", prodPhoto);
                    //formData.append("id", prodName);
                    /* save_file(`${API_URL}/projects/new/photo`,
                        {
                            method: "POST",
                            token: auth_state.authState.token,
                            body: formData
                        }
                    ).then((response) => {
                        if (response.statusCode == 201) {
                            setLoading(false);
                            setSubmitSuccess(true);
                            setTimeout(() => {
                                setSubmitSuccess(false);
                            }, 2000);
                        }
                        else {
                            setLoading(false);
                            setSubmitFailure(true);
                            setTimeout(() => {
                                setSubmitFailure(false);
                            }, 2000)
                        }
                    }); */
                }
                else {
                    setLoading(false);
                    setSubmitFailure(true);
                    setTimeout(() => {
                        setSubmitFailure(false);
                    }, 3800)
                }
            });
        } catch (error) {
            setLoading(false);
            setSubmitFailure(true);
            setTimeout(() => {
                setSubmitFailure(false);
            }, 3800);
        };
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
                                    <input class="text-center" type="text" name="prodName" id="prodName" placeholder="e.g The real homes" onChange={(e) => {setProdName(e.target.value)}} />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodValue">Value</label>
                                    <input class="text-center" type="text" name="prodValue" id="prodValue" placeholder="e.g 19.2M, 500K" onChange={(e) => {setProdValue(e.target.value)}} />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodPhoto">Photo</label>
                                    <input type="file" class="ms-2" id="prodPhoto" name="file" onChange={(e) => {setProdPhoto(e.target.files[0])}} disabled={true} />
                                </span>
                                <span class="operation-response mx-auto">
                                {loading && 
                                    <label className="success mx-auto d-flex align-items-center">
                                        <span>
                                            <img src={circular_loading} alt="" width={"40px"} />
                                        </span>
                                    </label>
                                }
                                {submitSuccess && 
                                    <label className="success mx-auto d-flex align-items-center">
                                        <span>Successfully added</span>
                                        <i className="bi bi-check-circle-fill"></i>
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