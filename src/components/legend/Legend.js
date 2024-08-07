import React from "react";
import "./Legend.scss";
import PropertyChart from "../charts/Property_chart";
import ClientChart from "../charts/ClientChart";
import Prop_cartegory1 from "../charts/Prop_cartegory1";
import Prop_cartegory2 from "../charts/Prop_cartegory2";
import NotificationsLineChart from "../charts/NotificationsChart";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Img1 from "../../assets/img/AI-gen-clients1.jpg";
import Img2 from "../../assets/img/AI-gen-clients2.jpg";
import Img3 from "../../assets/img/AI-gen-clients4.jpg";
import Img4 from "../../assets/img/AI-gen-prop1.jpg";
import Img5 from "../../assets/img/AI-gen-prop3.jpg";
import Img6 from "../../assets/img/AI-gen-prop4.jpg";

const Legend = () => {
    const data1 = [
        {month: 'January', value: 13},
        {month: 'February', value: 20},
        {month: 'March', value: 17},
        {month: 'April', value: 14},
        {month: 'May', value: 27},
        {month: 'June', value: 16},
        {month: 'July', value: 23},
    ];
    const data2 = [
        {type: "Pre-construction", value: 54},
        {type: "Under construction", value: 67},
        {type: "Completed", value: 113}
    ];
    const data3 = [
        {type: "Commercial", value: 80},
        {type: "Residential", value: 20},
        {type: "Land", value: 40}
    ];
    const data4 = [
        {month: 'January', value: 27},
        {month: 'February', value: 17},
        {month: 'March', value: 13},
        {month: 'April', value: 20},
        {month: 'May', value: 8},
        {month: 'June', value: 11},
        {month: 'July', value: 23},
    ]

    return (
        <section className="legend_section">
            <div className="legend_stats col-11 col-md-12 col-lg-11 d-flex flex-column mb-4">
                <div className="div_stat col-12 d-flex flex-column flex-md-row mb-2">
                    <div className="num_stat col-12 col-md-6 d-flex flex-column align-items-center">
                        <div className="stat_tag d-flex">
                            <span className="material-symbols-outlined me-2">domain_add</span>
                            <h3>Projects and Properties</h3>
                        </div>
                        <article className="mx-auto d-flex flex-column align-items-center justify-content-center" style={{marginTop: "2rem"}}>
                            <h4>50 <span style={{fontSize: "60px"}}>+</span></h4>
                            {/* <p>Completed</p> */}
                        </article>
                        <ul className="category d-flex col-10 mx-auto align-items-center justify-content-center">
                            <li className="text-center">24% Land</li>
                            <li className="text-center">37% Residential</li>
                            <li className="text-center">39% Commercial</li>
                        </ul>
                    </div>
                    <div className="stat col-12 col-md-6">
                        <PropertyChart data={data1} />
                    </div>
                </div>
                <div className="div_stat col-12 d-flex flex-column-reverse flex-md-row">
                    <div className="stat col-md-6">
                        <ClientChart data={data4} />
                    </div>
                    <div className="stat col-md-6 d-flex align-items-center">
                        <article className="col-5 d-flex flex-column align-items-center justify-content-center">
                            <h4>100 <span style={{fontSize: "60px"}}>+</span></h4>
                            <p>Clients Acquired</p>
                        </article>
                        <div className="col-7 d-flex align-items-center justify-content-center">
                            <Prop_cartegory2 data={data3} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="highlight_slider col-11 col-lg-11 d-flex flex-lg-row">
                <div className="slider_container col-12 col-md-6 d-flex flex-column">
                    <div id="client_carousel" className="slider carousel slide" data-bs-ride="carousel">
                        <div class="slider_text d-flex flex-column align-items-left col-5">
                            <span>Satisfied clients</span>
                        </div>
                        <div className="carousel-inner">
                            <div class="carousel-item active">
                                <img src={Img1} alt="" className="d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src={Img2} alt="" className="d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src={Img3} alt="" className="d-block" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#client_carousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#client_carousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="slider_container col-12 col-md-6 d-flex justify-content-lg-end align-items-end flex-column">
                    <div id="prop_carousel" className="slider carousel slide" data-bs-ride="carousel">
                        <div class="slider_text d-flex flex-column align-items-left col-5">
                            <span>Properties</span>
                        </div>
                        <div className="carousel-inner">
                            <div class="carousel-item active">
                                <img src={Img4} alt="" className="d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src={Img5} alt="" className="d-block" />
                            </div>
                            <div class="carousel-item">
                                <img src={Img6} alt="" className="d-block" />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#prop_carousel" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#prop_carousel" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="notifications_stats col-12 col-md-11">
                <div className="title_div">
                    <div className="d-flex flex-column">
                        <p style={{fontSize: "17px", margin: "0"}}><i className="bi bi-bell-fill me-2" style={{fontSize: "20px"}}></i>Total notifications sent</p>
                        <h4 className="col-4 d-flex align-items-center " style={{fontSize: "30px", margin: "0"}}>213 <span className="badge ms-2">3.5% <i class="bi bi-arrow-up-right ms-1"></i></span></h4>
                    </div>
                </div>
                <div className="col-12" style={{height: "180px", marginTop: "1.5rem"}}>
                    <NotificationsLineChart />
                </div>
            </div>
        </section>
    );
};

export default Legend;