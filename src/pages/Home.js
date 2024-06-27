import React from "react";
import Header from "../components/header/Header";
import Legend from "../components/legend/Legend";
import Tables_container from "../components/data_tables/Tables_container";
import Footer from "../components/footer/Footer";
import Projects_table from "../components/data_tables/Projects_table";
import Clients_table from "../components/data_tables/Clients_table";

const Home = () => {
    return (
        <div className="App_page w-100">
            <Header />
            <Legend />
            <Tables_container table={Projects_table} for_name={"Projects"} />
            <Tables_container table={Clients_table} for_name={"Clients"} />
            <Footer />
        </div>
    );
};

export default Home;