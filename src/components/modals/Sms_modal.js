import React, { useState, useEffect } from "react";
import "./modal.scss";

const Sms_modal = () => {
    const [prodSearch, setProdSearch] = useState("");
    const [prodFound, setProdFound] = useState(false);

    const handle_prod_search = (e) => {
        setProdFound(true);
    };
    return (
        <section id="smsModal" class="modal fade messageModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title myModal-title">SMS all clients</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-form">
                            <form action="" id="smsForm" class="d-flex flex-column justify-content-between">
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodId">Product Id</label>
                                    <span class="d-flex justify-content-between searchField">
                                        <input class="text-center" type="text" name="prodId" id="prodIdEdit" placeholder="search by Id" onChange={setProdSearch} />
                                        <span id="searchProdId" class="text-center"  onClick={handle_prod_search}>
                                            <i class="bi bi-search"></i>
                                        </span>
                                    </span>
                                    {/* <input class="text-center" type="text" name="prodId" id="prodId" placeholder="" /> */}
                                    {prodFound &&
                                        <span class="confirm-product d-flex align-items-center justify-content-center">
                                            <i class="bi bi-check-circle-fill me-2"></i>
                                            <span>Product found</span>
                                        </span>
                                    }
                                </span>
                                <span class="message-field d-flex flex-column">
                                    <label for="message">Compose Message</label>
                                    <textarea name="message" id="message" placeholder="Write message here..."></textarea>
                                </span>
                                <span class="operation-response mx-auto">
                                    <label class="success mx-auto d-none align-items-center">
                                        <span>Sent Successfully</span>
                                        <i class="bi bi-check-circle-fill"></i>
                                    </label>
                                    <label class="failure mx-auto d-none align-items-center">
                                        <span>Operation Failed!</span>
                                        <i class="bi bi-x-circle-fill"></i>
                                    </label>
                                </span>
                                <span class="modal-footer">
                                    <input type="submit" value="Send" class="btn btn-primary" style={{width: "60px", height: "38px"}} />
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{width: "60px", height: "38px"}}>Close</button>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sms_modal;