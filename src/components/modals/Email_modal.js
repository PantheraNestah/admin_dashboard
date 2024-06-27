import React from "react";
import "./modal.scss";

const Email_modal = () => {
    return (
        <section id="emailModal" class="modal fade messageModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title myModal-title">Email all clients</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-form">
                            <form id="emailForm" class="d-flex flex-column justify-content-between">
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodId">Product Id</label>
                                    <input class="text-center" type="text" name="prodId" id="prodId" placeholder="" />
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

export default Email_modal;