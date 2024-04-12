import React, {useState} from 'react'
import { CountryData } from './CountryData'
import Style from './Country.module.css';
import ModalConfirm from './Modal/ModalConfirm';
import ModalEdit from './Modal/ModalEdit';
import ModalAdd from './Modal/ModalAdd';
import Button from '../../components/Button/Button';
import _ from "lodash"
const Countries = () => {
  const [countries, setCountries] = useState(CountryData);
  const [dataDelete, setDataDelete] = useState({});
  const [dataEdit, setDataEdit] = useState({});
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const [isShowModalEdit, setIsShowModalEdit] = useState(false);
  const[isShowModelAddNew, setIsShowModalAddNew] = useState(false);
  const handleClose = () => {
    setIsShowModalAddNew(false)
    setIsShowModalEdit(false)
    setIsShowModalDelete(false)
  }
  const handleDelete = (data) => {
    setIsShowModalDelete(true);
    setDataDelete(data)
    console.log(data);
  }
  const handleEditUser= (data) => {
    setDataEdit(data);
    setIsShowModalEdit(true)
}
  const handleDeleteUserFromModal = (countryToDelete) => {
    console.log("Original countries array:", countries);
    let cloneCountries = _.cloneDeep(countries);
    console.log("Cloned countries array:", cloneCountries);
    cloneCountries = cloneCountries.filter(item => item.id !== countryToDelete.id);
    setCountries(cloneCountries);
  }
  const handleUpdateTable = (data) => {
    setCountries([data, ...countries])
  }
  const handleEditFromModal = (editedData) => {
    const updatedCountries = countries.map(item =>
        item.id === editedData.id ? editedData : item
    );
    setCountries(updatedCountries);
    handleClose();
};
  return (
    <>
    <div className={Style.countries}>
        <div className={Style.countries_add}><span><Button btnName="Add" handleClick={()=> setIsShowModalAddNew(true)}></Button></span></div>
      <table className={Style.table_container}>
        <thead className={Style.table_container_head}>
          <tr>
            <th>Name</th>
            <th>Code</th>
            <th>Description</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody className={Style.table_container_head}>
        {countries.map((el, i) => (
          <tr key={i}>
            <td>{el.name}</td>
            <td>{el.code}</td>
            <td>{el.des}</td>
            <td >
            <Button btnName="Delete" handleClick={()=> handleDelete(el)}></Button>
            </td>
            <td >
            <Button btnName="Edit" handleClick={() => handleEditUser(el)}></Button></td>
          </tr>
          
        ))}
        { isShowModalDelete && 
          <ModalConfirm
            show= {isShowModalDelete}
            handleClose={handleClose}
            dataDelete = {dataDelete}
            handleDeleteUserFromModal ={handleDeleteUserFromModal}
          />
        }
        {isShowModalEdit &&
          <ModalEdit
              show={isShowModalEdit}
              dataEdit={dataEdit}
              handleClose={handleClose}
              handleEditFromModal={handleEditFromModal} 
          />
        }
        {isShowModelAddNew &&
          <ModalAdd
              show={isShowModalEdit}
              handleClose = {handleClose}
              handleUpdateTable = {handleUpdateTable}
          />
        }
        </tbody>
        </table>
    </div>
  </>
  )
}

export default Countries