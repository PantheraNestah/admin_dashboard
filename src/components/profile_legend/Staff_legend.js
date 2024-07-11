import React from "react";
import { NavLink } from "react-router-dom";
import "./Staff_legend.scss";

const Staff_legend = () => {
    return (
        <section className="staff_legend border">
            {/* <nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><NavLink to={"/"}>Home</NavLink></li>
                    <li class="breadcrumb-item active" aria-current="page">Staff</li>
                </ol>
            </nav> */}
            <div className="d-none col-lg-9">
                <div className="info_container">
                    <div className="dark_cover"></div>
                    <div className="profile_pic"></div>
                    <div class="prof-body">
                        <div class="row info-container">
                            <div class="col-lg-7 d-flex flex-column pt-3" style={{paddingLeft: "2rem"}}>
                                <h2 style={{fontSize: "24px", marginBottom: "3px"}}>McDornald Williams</h2>
                                <span style={{fontSize: "18px"}}>Senior Human Resource</span>
                                <article class="quick-contact col-5 d-flex justify-content-between">
                                    <div>
                                        <a href="" class="btn btn-cprimary">SMS</a>
                                    </div>
                                    <div>
                                        <a href="" class="btn btn-cprimary">eMail</a>
                                    </div>
                                </article>
                            </div>
                            <div class="col-lg-5" style={{paddingRight: "1rem"}}>
                                <article>
                                    <a href="" class="d-flex align-items-center">
                                        <span><i class="bi bi-linkedin"></i></span>
                                        <span class="detail-ln ms-2">McDornald Williams</span>
                                    </a>
                                </article>
                                <article>
                                    <a href="" class="d-flex align-items-center"> 
                                        <span style={{color: "black"}}><i class="bi bi-twitter-x"></i></span>
                                        <span class="detail-x ms-2">@McDornald254</span>
                                    </a>
                                </article>
                                <article>
                                    <a href="" class="d-flex align-items-center">
                                        <span><i class="bi bi-envelope-at-fill"></i></span>
                                        <span class="detail-mail ms-2">dornaldwilliams@gmail.com</span>
                                    </a>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stats_highlights col-12 col-md-11 d-flex flex-column flex-md-row">
                <div className="stat_cont col-12 col-md-6"></div>
                <div className="stat_cont col-12 col-md-6"></div>
            </div>
        </section>
    );
};
export default Staff_legend;