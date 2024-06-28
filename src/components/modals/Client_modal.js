import React, { useState, useEffect } from 'react';
import "./modal.scss";

const Client_modal = () => {
    const [prodSearch, setProdSearch] = useState("");
    const [prodFound, setProdFound] = useState(false);

    const handle_prod_search = (e) => {
        setProdFound(true);
    };

    return (
        <section id="clientModal" class="modal fade clientModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title myModal-title">Client Registration</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-form">
                            <form action="" id="clientForm" class="d-flex flex-column justify-content-between col-11">
                                <span class="input-field d-flex justify-content-between">
                                    <label for="productId">Product Id</label>
                                    <span class="d-flex justify-content-between searchField">
                                        <input class="text-center" type="text" name="prodId" id="prodIdEdit" placeholder="search by Id" onChange={setProdSearch} />
                                        <span id="searchProdId" class="text-center" onClick={handle_prod_search}>
                                            <i class="bi bi-search"></i>
                                        </span>
                                    </span>
                                    {/* <input class="text-center" type="text" name="prodId" id="productId" placeholder="search by id" /> */}
                                    {prodFound &&
                                        <span class="confirm-product d-flex align-items-center justify-content-center">
                                            <i class="bi bi-check-circle-fill me-2"></i>
                                            <span>Product found</span>
                                        </span>
                                    }
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="name">Name</label>
                                    <input class="text-center" type="text" name="name" id="clientName" placeholder="e.g John Doe" />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="clientMail">Email</label>
                                    <input class="text-center" type="text" name="email" id="clientMail" placeholder="clientname@example.com" />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="clientPhone">Phone</label>
                                    <input class="text-center" type="text" name="phone" id="clientPhone" placeholder="+254798765432" />
                                </span>
                                <span class="operation-response mx-auto">
                                    <label class="success mx-auto d-none align-items-center">
                                        <span>Successfully added</span>
                                        <i class="bi bi-check-circle-fill"></i>
                                    </label>
                                    <label class="failure mx-auto d-none align-items-center">
                                        <span>Operation Failed!</span>
                                        <i class="bi bi-x-circle-fill"></i>
                                    </label>
                                </span>
                                <span class="modal-footer">
                                    <input type="submit" value="Save" class="btn btn-primary" style={{width: "60px", height: "38px"}} />
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Client_modal;