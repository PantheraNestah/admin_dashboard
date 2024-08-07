import React, { useState, useEffect } from "react";
import profile_holder from "../../assets/img/profile_placeholder.jpg";
import "./Mobile_acc.scss";

const Mobile_acc = () => {
    const [submitDisabled, setsubmitDisabled] = useState(true);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [lnHandle, setLnHandle] = useState("");
    const [xHandle, setXHandle] = useState("");

    const toggle_edit = () => {
        (submitDisabled) ? setsubmitDisabled(false) : setsubmitDisabled(true);
    };
    const details_submission = (e) => {
        setsubmitDisabled(true);
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("lnHandle", lnHandle);
        formData.append("xHandle", xHandle);
        const staffDetails = {
            email: email,
            phone: phone,
            lnHandle: lnHandle,
            xHandle: xHandle
        };
        console.log(formData);
    };

    return (
        <div className="mobile_settings w-100">
            <div className="settings_body">
                <article>
                    <div className="div-current-profile d-flex align-items-center justify-content-center">
                        <img src={profile_holder} className="staff-prof-photo" alt="" />
                    </div>
                </article>
                <article className="article-staff-details">
                    <span id="toggle-edit" style={{position: "absolute", top: "0.5rem", right: "1.1rem", cursor: "pointer"}} onClick={toggle_edit}>
                        <i className="bi bi-pencil-square" style={{fontSize: "24px",fontWeight: "800"}}></i>
                    </span>
                    <div className="staff-details border">
                        <form id="edit-staffForm" className="d-flex flex-column justify-content-between col-12 border" onSubmit={details_submission}>
                            <span className="d-flex justify-content-between">
                                <label for="" className="">Email</label>
                                <input id="staffEmail" className="txt-input" name="email" type="email" placeholder="name@example.com" onChange = {(e) => {setEmail(e.target.value)} } />
                            </span>
                            <span className="d-flex justify-content-between">
                                <label for="">Phone</label>
                                <input id="staffPhone" className="txt-input" name="phone" type="text" placeholder="+254798765432" onChange={(e) => {setPhone(e.target.value)}} />
                            </span>
                            <span className="d-flex justify-content-between">
                                <label for="lnHandle">LinkedIn</label>
                                <input className="txt-input" type="text" name="lnHandle" id="lnHandle" placeholder="@LinkedIn" onChange={(e) => {setLnHandle(e.target.value)}} />
                            </span>
                            <span className="d-flex justify-content-between">
                                <label for="xHandle">X Handle</label>
                                <input className="txt-input" type="text" name="xhandle" id="xHandle" placeholder="@xHandle" onChange={(e) => {setXHandle(e.target.value)}} />
                            </span>
                            <div>
                                <input type="submit" value="Save" className="submit-edit submit-btn btn btn-primary" style={{width: "60px"}} disabled={submitDisabled} />
                            </div>
                        </form>
                    </div>
                    <div className="div-profile-upload d-flex flex-column justify-content-between col-11">
                        <form id="prof-img-upload-form" className="col-12 d-flex flex-column justify-content-between">
                            <label for="img-upload">Profile photo</label>
                            <div className="upload-wrapper col-11 d-flex align-items-center justify-content-center">
                                <input id="img-upload" name="photo" type="file" />
                            </div>
                            <div className="profile-submit">
                                <input type="submit" value="Update" className="submit-btn btn btn-cprimary" style={{width: "75px"}} />
                            </div>
                        </form>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Mobile_acc;