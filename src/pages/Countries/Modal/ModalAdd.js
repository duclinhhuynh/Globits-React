import React, {useState} from 'react';
import Style from './ModalAdd.module.css';
import Button from '../../../components/Button/Button';
const ModalAdd = (props) => {
    const {show, handleClose, handleUpdateTable } = props;
    const [formData, setFormData] = useState({
        name: '',
        code: '',
        des: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.code || !formData.des) {
            // If any field is empty, don't proceed with adding
            return;
        }
        handleUpdateTable(formData);
        handleClose();
    };
    
    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose(); // Close the modal if click occurs outside modal content
        }
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
                              value={formData.name}
                              onChange={handleChange}
                          />
                      </div>
                      <div className={Style.Modal_body_form_item}>
                          <label>Code:</label>
                          <input
                              type="text"
                              name="code"
                              value={formData.code}
                              onChange={handleChange}
                          />
                      </div>
                      <div className={Style.Modal_body_form_item}>
                          <label>Description:</label>
                          <input
                              type="text"
                              name="des"
                              value={formData.des}
                              onChange={handleChange}
                          />
                      </div>
                  </form>
      </div>
      <div className={Style.Modal_footer}>
      <div className={Style.Modal_footer_button}>
          <Button btnName="Close" handleClick={() => handleClose()}></Button>
        </div>
        <div className={Style.Modal_footer_button}>
          <Button btnName="Add" handleClick={handleSubmit}></Button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ModalAdd