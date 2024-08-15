import React, { useState, useContext } from "react";
import logo_icon from "../assets/img/logo-icon.png"
import "../assets/style/Login.scss";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const AUTH_URL = process.env.REACT_APP_AUTH_URL;
    const navigate = useNavigate();
    const [submit_error, setSubmitError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch(`${AUTH_URL}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ "username": email, "password": password }),
            });
            const data = await response.json();
            if(data.message) {
                login(data.message, data.data);
                navigate("/home");
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            setSubmitError(true);
            setTimeout(() => {
                setSubmitError(false);
            }, 3800);
        }
    };
    const fetch_default_logins = () => {
        const default_email = process.env.REACT_APP_DEFAULT_EMAIL;
        const default_password = process.env.REACT_APP_DEFAULT_PASSWORD;
        setEmail(default_email);
        setPassword(default_password);
    }

    return (
        <section class="form-container1 mx-auto">
            <div class="form-container1-div pt-2">
                <div class="div-logo d-flex flex-column align-items-center">
                    <div>
                        <img src={logo_icon} />
                    </div>
                    <span class="d-text">Meladen Properties ltd</span>
                </div>
                <div class="form-container2 d-flex flex-column align-items-center justify-content-center">
                    <h2>Staff Login</h2>
                    <form class="col-11 col-md-8 d-flex flex-column justify-content-between" onSubmit={handleSubmit}>
                        <div class="div-input-group col-12 d-flex justify-content-between">
                            <label class="d-text col-4" for="username">Email</label>
                            <input class="col-7 text-center" name="username" id="username" placeholder="johndoe@example.com" style={{height: "28px"}} onChange={(e) => setEmail(e.target.value)} value={email}/>
                        </div>
                        <div class="div-input-group col-12 d-flex justify-content-between">
                            <label class="d-text col-4" for="password">Password</label>
                            <input class="col-7 text-center" name="password" id="password" placeholder="Enter password" type="password" style={{height: "28px"}} onChange={(e) => setPassword(e.target.value)} value={password}/>
                        </div>
                        <span class="operation-response mx-auto">
                            {submit_error &&
                                <label class="failure mx-auto d-flex align-items-center">
                                    <span>An Error occured!</span>
                                    <i class="bi bi-x-circle-fill"></i>
                                </label>
                            }
                        </span>
                        <div className="submision_area d-flex justify-content-between">
                            <input className="btn submit-btn" type="submit" value="Sign In"/>
                            <div className="btn cred_btn" onClick={fetch_default_logins}>Get Login credentials</div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
