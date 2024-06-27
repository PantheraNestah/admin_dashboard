import React from "react";
import { NavLink } from "react-router-dom";
import "./Staff_legend.scss";

const Staff_legend = () => {
    return (
        <section className="staff_legend">
            {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NavLink to={"/"}>Home</NavLink></li>
                    <li class="breadcrumb-item active" aria-current="page">Staff</li>
                </ol>
            </nav> */}
            <div className="col-lg-9">
                <div className="info_container">
                    <div className="dark_cover"></div>
                    <div className="profile_pic"></div>
                </div>
            </div>
        </section>
    );
};
export default Staff_legend;