import React from "react";
import "./Legend.scss";

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Img1 from "../../assets/img/AI-gen-clients1.jpg";
import Img2 from "../../assets/img/AI-gen-clients2.jpg";
import Img3 from "../../assets/img/AI-gen-clients4.jpg";
import Img4 from "../../assets/img/AI-gen-prop1.jpg";
import Img5 from "../../assets/img/AI-gen-prop3.jpg";
import Img6 from "../../assets/img/AI-gen-prop4.jpg";

const Legend = () => {
    return (
        <section className="legend_section border">
            {/* <div className="stats col-10 col-lg-9 d-flex flex-wrap border">
                <div className="stats_highlight"></div>
                <div className="stats_highlight"></div>
            </div> */}
            <div className="highlight_slider col-11 col-lg-9 d-flex border">
                <div className="slider_container col-12 col-lg-6 d-flex flex-column">
                    <div className="stats_highlight"></div>
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
                <div className="slider_container col-12 col-lg-6 d-flex flex-column">
                    <div className="stats_highlight"></div>
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
        </section>
    );
};

export default Legend;