import React from 'react';
import "./modal.scss";

const Prod_edit_modal = (props) => {
    return (
        <section id="prodModalEdit" class="modal fade prodModalEdit">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title myModal-title">Edit Project</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-form">
                            <form action="" id="prodForm" class="d-flex flex-column justify-content-between">
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodIdEdit">Search Id</label>
                                    <span class="d-flex justify-content-between searchField">
                                        <input class="text-center" type="text" name="prodId" id="prodIdEdit" placeholder="search by Id" />
                                        <span id="searchProdId" class="text-center">
                                            <i class="bi bi-search"></i>
                                        </span>
                                    </span>
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodNameEdit">Name</label>
                                    <input class="text-center" type="text" name="prodName" id="prodNameEdit" placeholder="e.g The real homes" disabled />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="prodValueEdit">Value</label>
                                    <input class="text-center" type="text" name="prodValue" id="prodValueEdit" placeholder="e.g 19.2M" disabled />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="">Photo</label>
                                    <input type="file" class="ms-2" name="prodPhoto" id="prodPhoto" placeholder="Upload Photo" disabled />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="clientsEdit">Clients NO</label>
                                    <input class="text-center" type="text" name="clients" id="clientsEdit" disabled />
                                </span>
                                <span class="operation-response mx-auto">
                                    <label class="success mx-auto d-none align-items-center">
                                        <span>Successfully Edited</span>
                                        <i class="bi bi-check-circle-fill"></i>
                                    </label>
                                    <label class="failure mx-auto d-none align-items-center">
                                        <span>Operation Failed!</span>
                                        <i class="bi bi-x-circle-fill"></i>
                                    </label>
                                </span>
                                <span class="modal-footer">
                                    <input type="submit" value="Save" class="btn btn-primary" style={{width: "60px", height: "38px"}} />
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

export default Prod_edit_modal;