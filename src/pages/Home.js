import React from "react";
import Header from "../components/header/Header";
import Legend from "../components/legend/Legend";
import Tables_container from "../components/data_tables/Tables_container";
import Footer from "../components/footer/Footer";
import Projects_table from "../components/data_tables/Projects_table";

const Home = () => {
    return (
        <div className="App_page w-100">
            <Header />
            <Legend />
            <Tables_container Data_table1={Projects_table} />
            <Footer />
        </div>
    );
};

export default Home;