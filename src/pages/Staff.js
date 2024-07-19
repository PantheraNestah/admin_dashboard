import React, { useContext } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Staff_legend from "../components/profile_legend/Staff_legend";
import Staff_table from "../components/data_tables/Staff_table";
import Tables_container from "../components/data_tables/Tables_container";
import Prod_modal from "../components/modals/Prod_modal";
import Prod_edit_modal from "../components/modals/Prod_edit_modal";
import Client_modal from "../components/modals/Client_modal";
import Email_modal from "../components/modals/Email_modal";
import Sms_modal from "../components/modals/Sms_modal";
import Staff_modal from "../components/modals/Staff_modal";
import Settings_offcanvas from "../components/app_offcanvas/Settings_offcanvas";

const Staff = () => {
    return (
        <div className="App_page w-100">
            <Header />
            <Staff_legend />
            <Tables_container table={Staff_table} for_name={"Staff"} />
            <Prod_modal />
            <Prod_edit_modal />
            <Client_modal />
            <Email_modal />
            <Sms_modal />
            <Staff_modal />
            <Settings_offcanvas />
            <Footer />
        </div>
    );
};

export default Staff;