import React from "react";
import "./Tables_container.scss";

const Table1 = ({ Data_table }) => {

    return (
        <div className="data_table col-lg-11 mx-lg-auto">
            <div className="table_title">
                <h2>Table 1</h2>
            </div>
            <div className="table_tabs col-lg-11 mx-lg-auto d-flex justify-content-end">
                <ul className="d-flex col-lg-8 d-flex justify-content-end">
                    <li>
                        <a href="" className="btn btn-outline-secondary">
                            Tab 1
                        </a>
                    </li>
                    <li>
                        <a href="" className="btn btn-outline-secondary">
                            Tab 2
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col-lg-11 mx-lg-auto my-2">
                <div className="search">
                    <input type="text" placeholder="Type to search..." className="" />
                </div>
                <Data_table />
            </div>
        </div>
    );
};

export default Table1;