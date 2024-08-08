import React from "react";
import "./Tables_container.scss";
import Table1 from "./Table1";
import { ProjnamesProvider } from "../../context/Proj_names_ctx";
import { ActiveProjProvider } from "../../context/Proj_names_ctx";

const Tables_container = (props) => {
    return (
        <section className="table_section">
            <div className="table_container col-12 col-md-11">
                <ProjnamesProvider>
                    <ActiveProjProvider>
                        <Table1 table={props.table} for_name={props.for_name}/>
                    </ActiveProjProvider>
                </ProjnamesProvider>
            </div>
        </section>
    );
};

export default Tables_container;