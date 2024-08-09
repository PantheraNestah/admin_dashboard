import React, { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import logo_icon from "../assets/img/logo-icon.png"
import "../assets/style/Login.scss"

const SetPassword = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const id_param = queryParams.get('id');
    const endpoint = process.env.REACT_APP_SERVER_URL;
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitFailure, setSubmitFailure] = useState(false);
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const [passwordMatch, setPasswordMatch] = useState(true);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirm) {
            setPasswordMatch(false);
            setTimeout(() => {
                setPasswordMatch(true);
            }, 3800);
            return;
        }
        fetch(`http://localhost:8080/set_password`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id: id_param,
                password: password
            })
        }).then((response) => {
            try {
                response.json().then((data) => {
                    console.log(data);
                    if (data.statusCode === 201 || data.statusCode === 200) {
                        setSubmitSuccess(true);
                        setTimeout(() => {
                            setSubmitSuccess(false);
                        }, 3800);
                        navigate("/login");
                    } else {
                        setSubmitFailure(true);
                        setTimeout(() => {
                            setSubmitFailure(false);
                        }, 3800);
                    }
                });
            }
            catch (error) {
                console.log(error);
                setSubmitFailure(true);
                setTimeout(() => {
                    setSubmitFailure(false);
                }, 3800);
            }
        });

    };

    return (
        <section className="form-container1 mx-auto">
            <div className="form-container1-div pt-2">
                <div className="div-logo d-flex flex-column align-items-center">
                    <div>
                        <img src={logo_icon}/>
                    </div>
                    <span  className="d-text">Meladen Properties ltd</span>
                </div>
                <div className="form-container2 d-flex flex-column align-items-center justify-content-center">
                    <h2>Account Password</h2>
                    <form className="col-11 col-md-8 d-flex flex-column justify-content-between" onSubmit={handleSubmit}>
                        <div className="div-input-group col-12 d-flex justify-content-between">
                            <label className="d-text col-4">Password</label>
                            <input className="col-7 text-center" type="password" onChange={(e) => {setPassword(e.target.value)}}/>
                        </div>
                        <div className="div-input-group col-12 d-flex justify-content-between">
                            <label className="d-text col-4">Confirm</label>
                            <input className="col-7 text-center" type="password" onChange={(e) => {setConfirm(e.target.value)}}/>
                        </div>
                        <span class="operation-response mx-auto">
                            {submitSuccess &&
                                <label class="success mx-auto d-flex align-items-center">
                                    <span>Successfully saved</span>
                                    <i class="bi bi-check-circle-fill"></i>
                                </label>
                            }
                            {submitFailure &&
                                <label class="failure mx-auto d-flex align-items-center">
                                    <span>Operation Failed!</span>
                                    <i class="bi bi-x-circle-fill"></i>
                                </label>
                            }
                            {!passwordMatch &&
                                <label class="failure mx-auto d-flex align-items-center">
                                    <span>Passwords do not match!</span>
                                    <i class="bi bi-x-circle-fill"></i>
                                </label>
                            }
                        </span>
                        <div>
                            <input className="btn submit-btn" type="submit" value="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SetPassword;