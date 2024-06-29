import React from "react";
import "./Tables_container.scss";

const Table1 = (props) => {

    return (
        <div id={`${props.for_name}_section`} className="data_table col-12 col-lg-11 mx-lg-auto">
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
                            <a href="#prodModal" className="btn btn-outline-secondary d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#prodModal">
                                <span><i class="bi bi-plus-circle-fill btsp-icons" style={{fontSize: "20px"}}></i></span>
                                <span class="ms-1" style={{fontSize: "14.5px"}}>Project</span>
                            </a>
                        </li>
                        <li>
                            <a href="#prodModalEdit" className="btn btn-outline-secondary d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#prodModalEdit">
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
                            <a href="#staffModal" className="btn btn-outline-secondary d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#staffModal">
                                <span><i class="bi bi-plus-circle-fill btsp-icons" style={{fontSize: "20px"}}></i></span>
                                <span class="ms-1" style={{fontSize: "14.5px"}}>Staff</span>
                            </a>
                        </li>
                    </ul>
                </div>
            ): null}
            { props.for_name === "Clients" ? (
                <div className="table_tabs col-lg-11 mx-lg-auto d-flex justify-content-center">
                    <ul className="d-flex col-12 col-lg-11 d-flex justify-content-between">
                        <li>
                            <a href="#clientModal" className="btn btn-outline-secondary d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#clientModal">
                                <span><i class="bi bi-person-fill-add btsp-icons" style={{fontSize: "20px"}}></i></span>
                                <span class="ms-1" style={{fontSize: "14.5px"}}>Client</span>
                            </a>
                        </li>
                        <li>
                            <a href="#emailModal" className="btn btn-outline-secondary d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#emailModal">
                                <span><i class="bi bi-envelope-arrow-up-fill btsp-icons" style={{fontSize: "20px"}}></i></span>
                                <span class="ms-1" style={{fontSize: "14.5px"}}>Mail</span>
                            </a>
                        </li>
                        <li>
                            <a href="#smsModal" className="btn btn-outline-secondary d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#smsModal">
                                <span><i class="bi bi-chat-left-dots-fill btsp-icons" style={{fontSize: "20px"}}></i></span>
                                <span class="ms-1" style={{fontSize: "14.5px"}}>SMS</span>
                            </a>
                        </li>
                    </ul>
                </div>
            ) : null}
            <div className="col-12 col-lg-11 mx-lg-auto my-2">
                <div className="search">
                    <input type="text" placeholder="Type to search..." className="text-center" />
                </div>
                <props.table />
            </div>
        </div>
    );
};

export default Table1;