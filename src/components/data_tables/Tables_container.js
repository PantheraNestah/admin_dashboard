import React from "react";
import "./Tables_container.scss";
import Table1 from "./Table1";

const Tables_container = (props) => {
    return (
        <section className="table_section">
            <div className="table_container col-12 col-lg-9">
                <Table1 table={props.table} for_name={props.for_name}/>
            </div>
        </section>
    );
};

export default Tables_container;