import React from "react";
import Header from "../components/header/Header";
import Legend from "../components/legend/Legend";
import Tables_container from "../components/data_tables/Tables_container";
import Footer from "../components/footer/Footer";
import Projects_table from "../components/data_tables/Projects_table";
import Clients_table from "../components/data_tables/Clients_table";
import Prod_modal from "../components/modals/Prod_modal";
import Prod_edit_modal from "../components/modals/Prod_edit_modal";
import Client_modal from "../components/modals/Client_modal";
import Email_modal from "../components/modals/Email_modal";
import Sms_modal from "../components/modals/Sms_modal";
import Settings_offcanvas from "../components/app_offcanvas/Settings_offcanvas";

const Home = () => {
    return (
        <div className="App_page w-100">
            <Header />
            <Legend />
            <Tables_container table={Projects_table} for_name={"Projects"} />
            <Tables_container table={Clients_table} for_name={"Clients"} />
            <Prod_modal />
            <Prod_edit_modal />
            <Client_modal />
            <Email_modal />
            <Sms_modal />
            <Settings_offcanvas />
            <Footer />
        </div>
    );
};

export default Home;