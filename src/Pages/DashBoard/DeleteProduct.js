import React from 'react';

const DeleteProduct = ({ title, message, closeModal, modalData, successAction, successButtonName  }) => {
    return (
        <div>
            <input type="checkbox" id="deleteProduct" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="ConfirmationModal"
                            className="btn btn-primary">{successButtonName}</label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteProduct;