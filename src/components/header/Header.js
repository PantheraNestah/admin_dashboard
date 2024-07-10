import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import profile_holder from "../../assets/img/profile_placeholder.jpg";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
    const [activeCollapse, setActiveCollapse] = useState("recent_activities");
  
    const handleToggle = (collapseId) => {
      setActiveCollapse((prev) => (prev === collapseId ? null : collapseId));
    }

    return (
        <header className="header col-12 d-flex">
            <div className="col-lg-12 d-none d-md-flex" style={{height:"100%"}}>
                {/* <div className="side_drop col-lg-2 d-flex align-items-center">
                    <a href="#side_menu" data-bs-toggle="collapse" aria-expanded="true" aria-controls="side_menu">
                        <span  class="material-symbols-outlined">menu</span>
                    </a>
                    <h2>Dashboard</h2>
                </div> */}
                {/* <nav className="col-lg-7 d-flex justify-content-between">
                    <h2>Meladen Properties ltd</h2>
                    <div className="prof_links d-flex align-items-center justify-content-center border">
                        <span><i class="bi bi-box-arrow-right"></i></span>
                        <span><i class="bi bi-bell-fill"></i></span>
                        <a href="#settingsOffcanvas" className="user_profile d-flex align-items-center justify-content-center" data-bs-toggle="offcanvas" data-bs-target="#settingsOffcanvas" aria-controls="#settingsOffcanvas">
                            <i class="bi bi-person-circle"></i>
                        </a>
                    </div>
                </nav> */}
                <div className="col-10 d-flex align-items-end border" style={{ gap: "8rem"}}>
                    <h2>Meladen Properties ltd</h2>
                    <div className="prof_links d-flex align-items-center justify-content-center border">
                        <span><i class="bi bi-box-arrow-right"></i></span>
                        <span><i class="bi bi-bell-fill"></i></span>
                        <a href="#settingsOffcanvas" className="user_profile d-flex align-items-center justify-content-center" data-bs-toggle="offcanvas" data-bs-target="#settingsOffcanvas" aria-controls="#settingsOffcanvas">
                            <i class="bi bi-person-circle"></i>
                        </a>
                    </div>
                </div>
                <div id="side_menu" className="">
                    <div className="menu_item">
                        <span>
                            <a href="#project_ops" className="d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#project_ops"><span class="material-symbols-outlined ggl-icons me-2">apartment</span> Projects</a>
                        </span>
                        <div id="project_ops" className="mini_menu collapse">
                            <a href="#prodModal" className="d-block" data-bs-toggle="modal" data-bs-target="#prodModal">Add Project</a>
                            <a href="#Projects_section" className="d-block">View</a>
                        </div>
                    </div>
                    <div className="menu_item">
                        <span>
                            <a href="#client_ops" className="d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#client_ops"> <i class="bi bi-people-fill btsp-icons me-2" ></i> Clients</a>
                        </span>
                        <div id="client_ops" className="mini_menu collapse">
                            <a href="#clientModal" className="d-block" data-bs-toggle="modal" data-bs-target="#clientModal">Add Client</a>
                            <a href="#Clients_section" className="d-block">View</a>
                        </div>
                    </div>
                    <div className="menu_item">
                        <NavLink to={"/staff"} className="d-flex align-items-center"><i class="bi bi-shield-fill-exclamation btsp-icons me-2"></i> Staff</NavLink>
                        <div></div>
                    </div>
                    <div className="menu_item">
                        <a href="#recent_activities" className="d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#recent_activities" onClick={() => handleToggle('recent_activities')}><span class="material-symbols-outlined ggl-icons me-2">work_history</span> Recent Activities</a>
                        <div id="recent_activities" className={`activities_log collapse ${activeCollapse === 'recent_activities' ? 'show' : ''}`}></div>
                    </div>
                    <div className="menu_item">
                        <a href="#support_sect" className="d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#support_sect" onClick={() => handleToggle('support_sect')}><span class="material-symbols-outlined ggl-icons me-2">support_agent</span> Contact Support</a>
                        <div id="support_sect" className={`contact_sect collapse ${activeCollapse === 'support_sect' ? 'show' : ''}`}></div>
                    </div>
                </div>
            </div>
            <Sm_nav />
        </header>
    );
};
const Sm_nav = () => {

    return (
        <div className="top_nav_sm col-12 d-flex align-items-center d-md-none">
            <h2 className="col-9 text-center border">Meladen Properties ltd</h2>
            <div className="menu_btn col-3 border d-flex align-items-center justify-content-end">
                <a href="#menu_drop" data-bs-toggle="collapse" data-bs-target="#menu_drop" aria-controls="menu_drop">
                    <span class="ggl_icon material-symbols-outlined">menu</span>
                </a>
            </div>
            <div id="menu_drop" class="collapse row">
                <div className="links_side col-5">
                    <ul className="d-flex flex-column align-items-start">
                        <li>
                            <a href="/#Projects_section">Projects</a>
                        </li>
                        <li>
                            <a href="#Clients_section">Clients</a>
                        </li>
                        <li>
                            <NavLink to="/staff">Staff</NavLink>
                        </li>
                    </ul>
                </div>
                <article className="profile_side col-6">
                    <NavLink className="profile_link mx-auto" to={"/mobile_acc"}>
                        <img src={profile_holder} alt="" />
                    </NavLink>
                </article>
            </div>
        </div>
    );
};

export default Header;