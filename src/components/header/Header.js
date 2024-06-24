import React from "react";
import "./Header.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
    return (
        <header className="header col-lg-12 d-flex">
            <div className="side_drop col-lg-2 d-flex align-items-center">
                <a href="#side_menu" data-bs-toggle="collapse" aria-expanded="true" aria-controls="side_menu">
                    <span  class="material-symbols-outlined">menu</span>
                </a>
                <h2>Dashboard</h2>
            </div>
            <nav className="col-lg-7 d-flex justify-content-between">
                <h2>Meladen Properties ltd</h2>
                <div className="prof_links d-flex align-items-center justify-content-center border">
                    <span><i class="bi bi-box-arrow-right"></i></span>
                    <span><i class="bi bi-bell-fill"></i></span>
                    <a href="#" className="user_profile d-flex align-items-center justify-content-center">
                        <i class="bi bi-person-circle"></i>
                    </a>
                </div>
            </nav>
            <div id="side_menu" className="collapse">
                <div className="menu_item">
                    <span>
                        <a href="#project_ops" className="d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#project_ops"><span class="material-symbols-outlined ggl-icons me-2">apartment</span> Projects</a>
                    </span>
                    <div id="project_ops" className="">
                        <a href="#">Add Project</a>
                        <a href="#">View</a>
                    </div>
                </div>
                <div className="menu_item">
                    <span>
                        <a href="#client_ops" className="d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#client_ops"> <i class="bi bi-people-fill btsp-icons me-2"></i> Clients</a>
                    </span>
                    <div id="client_ops" className="">
                        <a href="#">Add Client</a>
                        <a href="#">View</a>
                    </div>
                </div>
                <div className="menu_item">
                    <a href="#" className="d-flex align-items-center"><i class="bi bi-shield-fill-exclamation btsp-icons me-2"></i> Staff</a>
                    <div></div>
                </div>
                <div className="menu_item">
                    <a href="#recent_activities" className="d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#recent_activities"><span class="material-symbols-outlined ggl-icons me-2">work_history</span> Recent Activities</a>
                    <div id="recent_activities"></div>
                </div>
                <div className="menu_item">
                    <a href="#support_sect" className="d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#support_sect"><span class="material-symbols-outlined ggl-icons me-2">support_agent</span> Contact Support</a>
                    <div id="support_sect"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;