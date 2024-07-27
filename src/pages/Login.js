import React, { useState, useContext } from "react";
import logo_icon from "../assets/img/logo-icon.png"
import "../assets/style/Login.scss";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/auth/generateToken', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "username": email, "password": password }),
        });
        const data = await response.json();
        console.log(data.data);
        if(data.message) {
            login(data.message);
            navigate('/home');
        } else {
            alert("Invalid credentials");
        }
    };

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
                            <input class="col-7 text-center" name="username" id="username" placeholder="johndoe@example.com" style={{height: "28px"}} value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div class="div-input-group col-12 d-flex justify-content-between">
                            <label class="d-text col-4" for="password">Password</label>
                            <input class="col-7 text-center" name="password" id="password" type="password" style={{height: "28px"}} value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div>
                            <input class="btn submit-btn" type="submit" value="Sign In"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;