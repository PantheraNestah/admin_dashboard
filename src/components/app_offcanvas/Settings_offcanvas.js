import React, { useState, useEffect } from "react";
import "./Settings_offcanvas.scss";

const Settings_offcanvas = () => {
    const [submitDisabled, setsubmitDisabled] = useState(false);

    return (
        <div className="offcanvas offcanvas-end" id="settingsOffcanvas" aria-labelledby="settingsLabel">
            <div className="offcanvas-header">
                <h2 className="offcanvas-title" id="settingsLabel" style={{fontSize: "22px"}}>Account Settings</h2>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <hr />
            <div className="offcanvas-body">
                <article>
                    <div className="div-current-profile d-flex align-items-center justify-content-center">
                        <img src="../imgs/general_profile_photo-editted.jpg" className="staff-prof-photo" alt="" />
                    </div>
                </article>
                <article className="article-staff-details">
                    <span id="toggle-edit" style={{position: "absolute", top: "0.8rem", right: "1.1rem", cursor: "pointer"}}>
                        <i className="bi bi-pencil-square" style={{fontSize: "24px",fontWeight: "800"}}></i>
                    </span>
                    <div className="staff-details">
                        <form id="edit-staffForm" action="" className="d-flex flex-column justify-content-between col-11">
                            <span className="d-flex justify-content-between">
                                <label for="">Email</label>
                                <input id="staffEmail" className="txt-input" name="email" type="email" placeholder="name@example.com" />
                            </span>
                            <span className="d-flex justify-content-between">
                                <label for="">Phone</label>
                                <input id="staffPhone" className="txt-input" name="phone" type="text" placeholder="+254798765432" />
                            </span>
                            <span className="d-flex justify-content-between">
                                <label for="lnHandle">LinkedIn</label>
                                <input className="txt-input" type="text" name="lnHandle" id="lnHandle" placeholder="@LinkedIn" />
                            </span>
                            <span className="d-flex justify-content-between">
                                <label for="xHandle">X Handle</label>
                                <input className="txt-input" type="text" name="xhandle" id="xHandle" placeholder="@xHandle" />
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

export default Settings_offcanvas;