import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Staff_legend from "../components/profile_legend/Staff_legend";
import Staff_table from "../components/data_tables/Staff_table";
import Tables_container from "../components/data_tables/Tables_container";

const Staff = () => {
    return (
        <div className="App_page w-100">
            <Header />
            <Staff_legend />
            <Tables_container table={Staff_table} for_name={"Staff"} />
            <Footer />
        </div>
    );
};

export default Staff;