import React, { useState, useEffect, useContext } from "react";
import profile_placeholder from "../../assets/img/profile_placeholder.jpg";
import "./Mobile_acc.scss";
import AuthContext from "../../context/AuthContext";
import api from "../../utils/Api";
import { save_file } from "../../utils/Api";

const Mobile_acc = () => {
    const [submitDisabled, setsubmitDisabled] = useState(true);
    const [submit2Disabled, setsubmit2Disabled] = useState(true);
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [lnHandle, setLnHandle] = useState("");
    const [xHandle, setXHandle] = useState("");
    const [photo_name, setPhoto_name] = useState("");
    const [photo, setPhoto] = useState(null);
    const authState = useContext(AuthContext);
    const BASE_URL = process.env.REACT_APP_BACKEND_URL;
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        if (authState.authState.isAuthenticated) {
            setEmail(authState.authState.user.email);
            setPhone(authState.authState.user.phone);
            setLnHandle(authState.authState.user.lnHandle);
            setXHandle(authState.authState.user.xhandle);
            authState.authState.user.photo ? setPhoto_name(authState.authState.user.photo) : setPhoto_name("");
        }
    }, [authState.authState.isAuthenticated, authState.authState.user]);
    const toggle_edit = () => {
        (submitDisabled) ? setsubmitDisabled(false) : setsubmitDisabled(true);
        //(submit2Disabled) ? setsubmit2Disabled(false) : setsubmit2Disabled(true);
    };
    const details_submission = (e) => {
        setsubmitDisabled(true);
        e.preventDefault();
        const staffDetails = {
            email: email,
            phone: phone,
            lnHandle: lnHandle,
            xHandle: xHandle
        };
        console.log(staffDetails);
        try {
            api(`${API_URL}/staffs/edit`,
                {
                    method: "PUT",
                    token: authState.authState.token,
                    body: JSON.stringify(staffDetails)
                }
            ).then((response) => {
                console.log(response);
            });
        } catch (error) {}
    };
    const update_photo = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", photo);
        formData.append("id", email);
        save_file(`${API_URL}/staffs/photo`,
            {
                method: "POST",
                token: authState.authState.token,
                body: formData
            }
        ).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="mobile_settings w-100">
            <div className="settings_body">
                <article>
                    <div className="div-current-profile d-flex align-items-center justify-content-center">
                        <img src={photo_name !="" ? `${BASE_URL}/files/staffs/photo?filename=${photo_name}` : profile_placeholder} className="staff-prof-photo" alt="" />
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
                                <input id="staffEmail" className="txt-input" name="email" type="email" placeholder="name@example.com" onChange = {(e) => {setEmail(e.target.value)} } value={email} />
                            </span>
                            <span className="d-flex justify-content-between">
                                <label for="">Phone</label>
                                <input id="staffPhone" className="txt-input" name="phone" type="text" placeholder="+254798765432" onChange={(e) => {setPhone(e.target.value)}} value={phone} />
                            </span>
                            <span className="d-flex justify-content-between">
                                <label for="lnHandle">LinkedIn</label>
                                <input className="txt-input" type="text" name="lnHandle" id="lnHandle" placeholder="@LinkedIn" onChange={(e) => {setLnHandle(e.target.value)}} value={lnHandle} />
                            </span>
                            <span className="d-flex justify-content-between">
                                <label for="xHandle">X Handle</label>
                                <input className="txt-input" type="text" name="xhandle" id="xHandle" placeholder="@xHandle" onChange={(e) => {setXHandle(e.target.value)}} value={xHandle} />
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
                                <input id="img-upload" name="file" type="file" onChange={(e) => {setPhoto(e.target.files[0])}} disabled={true} />
                            </div>
                            <div className="profile-submit">
                                <input type="submit" value="Update" className="submit-btn btn btn-cprimary" style={{width: "75px"}} disabled={submit2Disabled} />
                            </div>
                        </form>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Mobile_acc;