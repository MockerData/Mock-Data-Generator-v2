/**
 * @module mainContainer.jsx
 * @description Stateful container for functional compononents
 */

import React, { useEffect, useState, useRef } from 'react';
import DataSelector from '../components/dataSelector.jsx'
import { v4 as uuidv4 } from 'uuid'
import axios from 'axios'
import copyIcon from '../copyIcon.svg'


const MainContainer = (props) => {
  const { setLoggedIn, loggedIn, user} = props;

  const [dataTypes, setDataTypes] = useState([]);
  const dataInput = useRef();
  const quantInput = useRef();
  const textAreaInput = useRef();
  const [error, setError] = useState('');

  function handleAdd(event) {
    const typeOfData = dataInput.current.value;
    // all of this insane logic inside of setDataTypes is just my way of preventing
    // the user from adding the same dataType twice
    setDataTypes(prevTypes => {
      let alreadyExists = false;

      [...prevTypes].forEach((element) => {
        if (element.type === typeOfData) {
          alreadyExists = true;
        }
      })
      if (alreadyExists === false) {
        return [...prevTypes, { key: uuidv4(), type: typeOfData }]
      } else {
        return [...prevTypes]
      }

    })
  }

  function handleDelete(theKey) {
    setDataTypes(prevTypes => {
      return [...prevTypes].filter((element) => element.key !== theKey)
    })
  }

  function handleSubmit(event) {
    const stateData = dataTypes
    const quantity = quantInput.current.value
    console.log('quantity', quantity);
    if (loggedIn === false && quantity > 15) {
      setError('Please login to access datasets larger than 15')
      textAreaInput.current.value = ''
      return;
    }
    let fetchString = `http://localhost:3000/api?quantity=${quantity}`

    // build our url with all of the datatypes in the query string
    stateData.forEach((element) => {
      fetchString += `&${element.type}=true`
    })

    axios.get(fetchString)
    .then((response) => {
      setError('');
      textAreaInput.current.value = JSON.stringify(response.data, null, 2)
    })
    .catch((err) => 
      setError('Please login to access datasets larger than 15')
    );
  }

  function handleCopy(event) {
    navigator.clipboard.writeText(textAreaInput.current.value)
  }


  console.log(textAreaInput);


  return (
    <div id="main_container">
      <div className="container-2">
      <div id='form'>
        <label id='quantity_selector-label'> Quantity:
          <input ref={quantInput} id="quantity_selector" type="number" min = '1' max = '1000' defaultValue= '5'/>
        </label>
        <select ref={dataInput} name="dataSelect" id="dataSelect">
          <option value="firstName">First Name</option>
          <option value="fullName">Full Name</option>
          <option value="fullNameMiddle">First/Middle/Last Name</option>
          <option value="gender">Gender</option>
          <option value="age">Age</option>
          <option value="email">Email</option>
          <option value="phoneNumber">Phone Number</option>
          <option value="postalCode">Postal Code</option>
          <option value="country">Country</option>
          <option value="totalPurchaseVal">Total Purchases Value</option>
          <option value="numOfPurchases">Number of Purchases</option>
          <option value="frequency">Frequency</option>
        </select>
        <button id='add_button' onClick={handleAdd} >Add Data Type</button>
      </div>
      <div id="datatype_selector">
        <DataSelector dataTypes={dataTypes} handleDelete={handleDelete} />
      </div>
      {/* make a button to add new DataType */}
      <div id= 'text_box_and_copy'>
        <textarea ref={textAreaInput} id="text_output">
        </textarea>
        <button id='copy' onClick={handleCopy} ><img src='../styles/logos/mockerblack.png' alt="copy to clipboard" id='copy-image' /></button>
      </div>
      <div id = 'add_and_submit'>
        <button id="submit_button" onClick={handleSubmit} >Generate Data</button>
        <h3>{error}</h3> 
      </div>
    </div>
  </div>
  )
};

export default MainContainer;

