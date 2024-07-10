import React from "react";
import "./Tables_container.scss";
import Table1 from "./Table1";

const Tables_container = (props) => {
    return (
        <section className="table_section border">
            <div className="table_container col-12 col-lg-10 border">
                <Table1 table={props.table} for_name={props.for_name}/>
            </div>
        </section>
    );
};

export default Tables_container;