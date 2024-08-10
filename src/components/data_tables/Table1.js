import React, { useEffect, useState } from "react";
import "./Tables_container.scss";
import { useProjnames } from "../../context/Proj_names_ctx";
import { useActiveProjId } from "../../context/Proj_names_ctx";

const Table1 = (props) => {
    //const { activeProjId } = useActiveProjId();
    const { active_proj_id, setActive_proj_id } = useActiveProjId();
    const { projnames_list } = useProjnames();
    const [local_projs_list, setLocal_projs_list] = useState(projnames_list);

    const option_change = (event) => {
        const index = event.target.selectedIndex
        const proj_id = event.target.options[index].getAttribute('data-id')
        //console.log(`clicked projname of index: ${proj_id}`)
        setActive_proj_id(proj_id)
    }
    useEffect(() => {
        setLocal_projs_list(projnames_list)
        //console.log(local_projs_list)
    }, [projnames_list])

    return (
        <div id={`${props.for_name}_section`} className="data_table col-12 col-lg-11 mx-lg-auto">
            <div className="table_title">
                <h2 className="mb-2">{props.for_name} Details</h2>
                { props.for_name === "Clients" ? (
                    <>
                        <p><span>Property specific</span> Clients</p>
                        <select name="property_active" id="property_select" className="mt-1 p-1" onChange={option_change}>
                            {local_projs_list.map((projname_n_id, index) => (
                                <option 
                                    value={projname_n_id.project} 
                                    key={projname_n_id.id}
                                    data-id={projname_n_id.id}
                                >
                                    {projname_n_id.project}
                                </option>
                            ))}
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
                {props.for_name == "Clients" ? 
                    <props.table prop_id = {{}} /> : <props.table />
                }
                {/* <props.table/> */}
            </div>
        </div>
    );
};

export default Table1;