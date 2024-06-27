import React from "react";
import "./Tables_container.scss";
import Table1 from "./Table1";

const Tables_container = ({ Data_table1 }) => {
    return (
        <section className="table_section">
            <div className="table_container col-lg-9">
                <Table1 Data_table={Data_table1}/>
            </div>
        </section>
    );
};

export default Tables_container;