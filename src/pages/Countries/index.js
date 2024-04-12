import React, {useState} from 'react'
import { CountryData } from './CountryData'
import Style from './Country.module.css';
import ModalConfirm from './Modal/ModalConfirm';
import _, { debounce, head } from "lodash"
const Countries = () => {
  const [countries, setCountries] = useState(CountryData);
  const [dataDelete, setDataDelete] = useState({});
  const [isShowModalDelete, setIsShowModalDelete] = useState(false);
  const handleClose = () => {
    // setIsShowModalAddNew(false)
    // setIsShowModalEdit(false)
    setIsShowModalDelete(false)
  }
  const handleDelete = (data) => {
    setIsShowModalDelete(true);
    setDataDelete(data)
    console.log(data);
  }
  const handleDeleteUserFromModal = (countryToDelete) => {
    console.log("Original countries array:", countries);
    let cloneCountries = _.cloneDeep(countries);
    console.log("Cloned countries array:", cloneCountries);
    cloneCountries = cloneCountries.filter(item => item.id !== countryToDelete.id);
    setCountries(cloneCountries);
  }
  
  return (
    <>
    <div className={Style.countries}>
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
            <td onClick={()=> handleDelete(el)}>
              Delete
            </td>
            <td>Edit</td>
          </tr>
        ))}
        </tbody>
        </table>
    </div>
    { isShowModalDelete && 
      <ModalConfirm
        show= {isShowModalDelete}
        handleClose={handleClose}
        dataDelete = {dataDelete}
        handleDeleteUserFromModal ={handleDeleteUserFromModal}
      />
    } 
  </>
  )
}

export default Countries