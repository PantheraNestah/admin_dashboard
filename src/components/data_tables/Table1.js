import React from "react";
import "./Tables_container.scss";

const Table1 = (props) => {

    return (
        <div className="data_table col-lg-11 mx-lg-auto">
            <div className="table_title">
                <h2 className="mb-2">{props.for_name} Details</h2>
                { props.for_name === "Clients" ? (
                    <>
                        <p><span>Property Name</span> Clients</p>
                        <select name="property_active" id="property_select" className="mt-1 p-1">
                            <option value="">Default Project</option>
                            <option value="">Project 1</option>
                            <option value="">Project 2</option>
                            <option value="">Project 3</option>
                            <option value="">Project 4</option>
                            <option value="">Project 5</option>
                            <option value="">Project 6</option>
                            <option value="">Project 7</option>
                            <option value="">Project 8</option>
                            <option value="">Project 9</option>
                        </select>
                    </>
                ): null}
            </div>
            { props.for_name === "Projects" ? (
                <div className="table_tabs col-lg-11 mx-lg-auto d-flex justify-content-end">
                <ul className="d-flex col-lg-8 d-flex justify-content-end">
                    <li>
                        <a href="" className="btn btn-outline-secondary d-flex justify-content-center align-items-center">
                            <span><i class="bi bi-plus-circle-fill btsp-icons" style={{fontSize: "20px"}}></i></span>
                            <span class="ms-1" style={{fontSize: "14.5px"}}>Project</span>
                        </a>
                    </li>
                    <li>
                        <a href="" className="btn btn-outline-secondary d-flex justify-content-center align-items-center">
                            <span><i class="bi bi-pencil-square btsp-icons" style={{fontSize: "20px"}}></i></span>
                            <span class="ms-1" style={{fontSize: "14.5px"}}>Edit</span>
                        </a>
                    </li>
                </ul>
            </div>
            ) : null}
            { props.for_name === "Staff" ? (
                <div className="table_tabs col-lg-11 mx-lg-auto d-flex justify-content-end">
                    <ul className="d-flex col-lg-5 d-flex justify-content-end">
                        <li>
                            <a href="" className="btn btn-outline-secondary d-flex justify-content-center align-items-center">
                                <span><i class="bi bi-plus-circle-fill btsp-icons" style={{fontSize: "20px"}}></i></span>
                                <span class="ms-1" style={{fontSize: "14.5px"}}>Staff</span>
                            </a>
                        </li>
                    </ul>
                </div>
            ): null}
            { props.for_name === "Clients" ? (
                <div className="table_tabs col-lg-11 mx-lg-auto d-flex justify-content-center">
                    <ul className="d-flex col-lg-11 d-flex justify-content-between">
                        <li>
                            <a href="" className="btn btn-outline-secondary d-flex justify-content-center align-items-center">
                                <span><i class="bi bi-person-fill-add btsp-icons" style={{fontSize: "20px"}}></i></span>
                                <span class="ms-1" style={{fontSize: "14.5px"}}>New client</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="btn btn-outline-secondary d-flex justify-content-center align-items-center">
                                <span><i class="bi bi-envelope-arrow-up-fill btsp-icons" style={{fontSize: "20px"}}></i></span>
                                <span class="ms-1" style={{fontSize: "14.5px"}}>Bulk mail</span>
                            </a>
                        </li>
                        <li>
                            <a href="" className="btn btn-outline-secondary d-flex justify-content-center align-items-center">
                                <span><i class="bi bi-chat-left-dots-fill btsp-icons" style={{fontSize: "20px"}}></i></span>
                                <span class="ms-1" style={{fontSize: "14.5px"}}>Bulk SMS</span>
                            </a>
                        </li>
                    </ul>
                </div>
            ) : null}
            <div className="col-lg-11 mx-lg-auto my-2">
                <div className="search">
                    <input type="text" placeholder="Type to search..." className="" />
                </div>
                <props.table />
            </div>
        </div>
    );
};

export default Table1;