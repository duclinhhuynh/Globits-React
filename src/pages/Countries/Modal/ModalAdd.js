import React, {useEffect, useState} from 'react';
import Style from './ModalAdd.module.css';
import Button from '../../../components/Button/Button';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
const ModalAdd = (props) => {
    const {show, handleClose, handleUpdateTable } = props;
    // const [formData, setFormData] = useState({
    //     name: '',
    //     code: '',
    //     des: ''
    // });
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formik, [name]: value });
    // };

    // const handleSubmit = () => {
    //     if (!formik.name || !formik.code || !formik.des) {
    //         // If any field is empty, don't proceed with adding
    //         return;
    //     }
    //     handleUpdateTable(formik);
    //     handleClose();
    // };
    const handleOutsideClick = (e) => {
        if (e.target === e.currentTarget) {
            handleClose(); // Close the modal if click occurs outside modal content
        }
    };
  return (
    <div className={Style.Modal_box} onClick={handleOutsideClick}>
    <div className={Style.Modal}>
      <div className={Style.Modal_title}>
        <h3>Add user</h3>
      </div>
      <div className={Style.Modal_body}>
            <Formik 
                initialValues={{ name: '', code: '', des: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.name) {
                        errors.name = 'Required';
                    }
                    if (!values.code) {
                        errors.code = 'Required';
                    }
                    if (!values.des) {
                        errors.des = 'Required';
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    // Handle form submission here
                    console.log(values);
                    handleUpdateTable(values);
                    handleClose();
                    setSubmitting(false);
                }}
            >
            {({ isSubmitting, handleSubmit }) => (
                  <Form className={Style.Modal_body_form}>
                      <div className={Style.Modal_body_form_item}>
                          <label className="form-label">Name</label>
                          <Field type="text" name="name" placeholder="Enter name of country" />
                      </div>
                      <div className={Style.Modal_body_form_item}>
                          <label>Code:</label>
                          <Field type="text" name="code" placeholder="Enter code of country" />
                      </div>
                      <div className={Style.Modal_body_form_item}>
                          <label>Description:</label>
                          <Field type="text" name="des" placeholder="Enter des of country" />
                      </div>
                      <div className={Style.Modal_footer}>
                        <div className={Style.Modal_footer_button}>
                            <Button btnName="Close" handleClick={() => handleClose()}></Button>
                            </div>
                            <div className={Style.Modal_footer_button}>
                            <Button btnName="Add" type="submit" handleClick={() =>handleSubmit()} disabled={isSubmitting}></Button>
                        </div>
                    </div>
                  </Form>
                )}
                </Formik>
      </div>
      
    </div>
  </div>
  )
}

export default ModalAdd