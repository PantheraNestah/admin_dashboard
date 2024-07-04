import React from "react";
import Mobile_acc from "../components/mobile_acc/Mobile_acc";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Mobile_acc_page = () => {
    return (
        <div className="App_page w-100">
            <Header />
            <Mobile_acc />
            <Footer />
        </div>
    );
};

export default Mobile_acc_page;