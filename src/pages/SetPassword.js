import React from "react";
import logo_icon from "../assets/img/logo-icon.png"
import "../assets/style/Login.scss"

const SetPassword = () => {

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
                    <form className="col-11 col-md-8 d-flex flex-column justify-content-between">
                        <div className="div-input-group col-12 d-flex justify-content-between">
                            <label className="d-text col-4">Password</label>
                            <input className="col-7 text-center" type="password"/>
                        </div>
                        <div className="div-input-group col-12 d-flex justify-content-between">
                            <label className="d-text col-4">Confirm</label>
                            <input className="col-7 text-center" type="password"/>
                        </div>
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