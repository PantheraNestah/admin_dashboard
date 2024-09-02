import React, { useState, useEffect, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import profile_holder from "../../assets/img/profile_placeholder.jpg";
import AuthContext from "../../context/AuthContext";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
    const [activeCollapse, setActiveCollapse] = useState("recent_activities");
    const { logout } = useContext(AuthContext);
  
    const handleToggle = (collapseId) => {
      setActiveCollapse((prev) => (prev === collapseId ? null : collapseId));
    }
    const navigate = useNavigate();
    const logout_user = () => {
        logout();
        navigate("/login");
    };

    return (
        <header className="header col-12 d-flex">
            <div className="col-lg-12 d-none d-lg-flex" style={{height:"100%"}}>
                <div className="top_title col-8 d-flex align-items-end justify-content-between" style={{ gap: "8rem"}}>
                    <h2>Meladen Properties ltd</h2>
                    <div className="prof_links d-flex align-items-center justify-content-center">
                        <span onClick={logout_user} style={{cursor: "pointer"}}><i class="bi bi-box-arrow-right"></i></span>
                        <span><i class="bi bi-bell-fill"></i></span>
                        <a href="#settingsOffcanvas" className="user_profile d-flex align-items-center justify-content-center" data-bs-toggle="offcanvas" data-bs-target="#settingsOffcanvas" aria-controls="#settingsOffcanvas">
                            <i class="bi bi-person-circle"></i>
                        </a>
                    </div>
                </div>
                <div id="side_menu" className="d-none d-lg-block">
                    <div className="title_section">
                        <h2>Dashboard</h2>
                    </div>
                    <div className="menu_section">
                        <div class="menu_item">
                            <span>
                                <NavLink to={"/home"} className="side_link d-flex align-items-center"><i class="bi bi-house-door-fill btsp-icons me-2"></i>Home</NavLink>
                            </span>
                        </div>
                        <div className="menu_item">
                            <span className="">
                                <a href="#project_ops" className="side_link d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#project_ops" onClick={() => handleToggle('project_ops')}><span class="material-symbols-outlined ggl-icons me-2">apartment</span> Projects</a>
                            </span>
                            <div id="project_ops" className={`mini_menu collapse ${activeCollapse === 'project_ops' ? 'show' : ''}`}>
                                <a href="#prodModal" className="d-block" data-bs-toggle="modal" data-bs-target="#prodModal">Add Project</a>
                                <a href="#Projects_section" className="d-block">View</a>
                            </div>
                        </div>
                        <div className="menu_item">
                            <span>
                                <a href="#client_ops" className="side_link d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#client_ops" onClick={() => handleToggle('client_ops')}> <i class="bi bi-people-fill btsp-icons me-2" ></i> Clients</a>
                            </span>
                            <div id="client_ops" className={`mini_menu collapse ${activeCollapse === 'client_ops' ? 'show' : ''}`}>
                                <a href="#clientModal" className="d-block" data-bs-toggle="modal" data-bs-target="#clientModal">Add Client</a>
                                <a href="#Clients_section" className="d-block">View</a>
                            </div>
                        </div>
                        <div className="menu_item">
                            <NavLink to={"/staff"} className="side_link d-flex align-items-center"><i class="bi bi-shield-fill-exclamation btsp-icons me-2"></i> Staff</NavLink>
                            <div></div>
                        </div>
                        <div className="menu_item">
                            <a href="#recent_activities" className="side_link d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#recent_activities" onClick={() => handleToggle('recent_activities')}><span class="material-symbols-outlined ggl-icons me-2">work_history</span> Recent Activities</a>
                            <div id="recent_activities" className={`activities_log collapse ${activeCollapse === 'recent_activities' ? 'show' : ''}`}></div>
                        </div>
                        <div className="menu_item">
                            <a href="#support_sect" className="side_link d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#support_sect" onClick={() => handleToggle('support_sect')}><span class="material-symbols-outlined ggl-icons me-2">support_agent</span> Contact Support</a>
                            <div id="support_sect" className={`contact_sect collapse ${activeCollapse === 'support_sect' ? 'show' : ''}`}></div>
                        </div>
                    </div> 
                </div>
            </div>
            <Sm_nav />
        </header>
    );
};
const Sm_nav = () => {
    const [expanded, setExpanded] = useState(false);
    const on_lick_click = () => {
        setExpanded(false);
    };

    return (
        <div className="navbar top_nav_sm col-12 d-flex align-items-center d-lg-none">
            <h2 className="col-9 col-md-10 text-center">Meladen Properties ltd</h2>
            <div className="menu_btn col-3 col-md-2 d-flex align-items-center justify-content-end">
                <a href="#menu_drop" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu_drop" aria-controls="menu_drop" aria-expanded="false" aria-label="Toggle navigation" onClick={() => {setExpanded(true)}}>
                    <span class="ggl_icon material-symbols-outlined">menu</span>
                </a>
            </div>
            <div id="menu_drop" class={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
                <div className="links_side col-12">
                    <ul className="d-flex flex-column col-12">
                        <li>
                            <NavLink to={"/home"} onClick={on_lick_click}>Home</NavLink>
                        </li>
                        <li>
                            <a href="/home#Projects_section" onClick={on_lick_click}>Projects</a>
                        </li>
                        <li>
                            <a href="/home#Clients_section" onClick={on_lick_click}>Clients</a>
                        </li>
                        <li>
                            <NavLink to="/staff" onClick={on_lick_click}>Staff</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/mobile_acc"} onClick={on_lick_click}>Profile</NavLink>
                        </li>
                    </ul>
                </div>
                {/* <article className="profile_side col-6">
                    <NavLink className="profile_link mx-auto" to={"/mobile_acc"}>
                        <img src={profile_holder} alt="" />
                    </NavLink>
                </article> */}
            </div>
        </div>
    );
};

export default Header;