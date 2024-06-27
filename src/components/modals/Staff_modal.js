import React from "react";
import "./modal.scss";

const Staff_modal = (props) => {
    return (
        <section id="staffModal" class="modal fade staffModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title myModal-title">staff Registration</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-form">
                            <form action="" id="staffForm" class="d-flex flex-column justify-content-between col-11">
                                <span class="input-field d-flex justify-content-between">
                                    <label for="staffName">Name</label>
                                    <input class="text-center" type="text" name="name" id="staffName" placeholder="e.g John Doe" />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="staffMail">Email</label>
                                    <input class="text-center" type="text" name="email" id="staffMail" placeholder="staffname@example.com" />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="staffPhone">Phone</label>
                                    <input class="text-center" type="text" name="phone" id="staffPhone" placeholder="+254798765432" />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="staffRole">Role</label>
                                    <input class="text-center" type="text" name="role" id="staffRole" placeholder="e.g Staff" />
                                </span>
                                <span class="input-field d-flex justify-content-between">
                                    <label for="staffDept">Department</label>
                                    <input class="text-center" type="text" name="department" id="staffDept" placeholder="e.g I.T/Accounts" />
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
    )
};

export default Staff_modal;