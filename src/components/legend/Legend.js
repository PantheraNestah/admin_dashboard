import React from "react";
import "./Legend.scss";

const Legend = () => {
    return (
        <section className="legend_section border">
            <div className="stats col-lg-9 d-flex border">
                <div className="stats_highlight"></div>
                <div className="stats_highlight"></div>
            </div>
            <div className="highlight_slider col-lg-9 d-flex border">
                <div className="slider"></div>
                <div className="slider"></div>
            </div>
        </section>
    );
};

export default Legend;