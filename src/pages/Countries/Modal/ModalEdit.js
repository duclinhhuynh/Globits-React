import React, { useState } from 'react'
import Style from './ModalEdit.module.css'

const ModalEdit = (props) => {
    const {show, handleClose, dataEdit, handleEditFromModal } = props;
    const [editedData, setEditedData] = useState({ ...dataEdit });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose(); // Close the modal if click occurs outside modal content
        }
    };

    const handleEdit = () => {
        handleEditFromModal(editedData);
    };
  return (
    <div className={Style.Modal_box} onClick={handleOutsideClick}>
      <div className={Style.Modal}>
        <div className={Style.Modal_title}>
          <h3>Edit user</h3>
        </div>
        <div className={Style.Modal_body}>
                    <form className={Style.Modal_body_form}>
                        <div className={Style.Modal_body_form_item}>
                            <label className="form-label">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={editedData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={Style.Modal_body_form_item}>
                            <label>Code:</label>
                            <input
                                type="text"
                                name="code"
                                value={editedData.code}
                                onChange={handleChange}
                            />
                        </div>
                        <div className={Style.Modal_body_form_item}>
                            <label>Description:</label>
                            <input
                                type="text"
                                name="des"
                                value={editedData.des}
                                onChange={handleChange}
                            />
                        </div>
                    </form>
        </div>
        <div className={Style.Modal_footer}>
          <button onClick={handleClose}>Close</button>
          <button onClick={() => handleEdit()}>Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default ModalEdit