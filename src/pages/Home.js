import React from "react";
import Header from "../components/header/Header";
import Legend from "../components/legend/Legend";
import Tables_container from "../components/data_tables/Tables_container";
import Footer from "../components/footer/Footer";

const Home = () => {
    return (
        <div className="App_page w-100">
            <Header />
            <Legend />
            <Tables_container />
            <Footer />
        </div>
    );
};

export default Home;