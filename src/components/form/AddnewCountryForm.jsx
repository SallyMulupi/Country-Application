
import React from 'react'
import {useRef} from 'react'
import './addNewForm.css'
function AddNewCountryForm(props) {
    const continentInputRef = useRef();
    const countryInputRef = useRef();
    const capitalInputRef = useRef();
    const currencyInputRef = useRef();
    const languageInputRef = useRef();
    function submitHandler(e){
        e.preventDefault();

         const enteredcontinent= continentInputRef.current.value;
         const enteredCountry = countryInputRef.current.value;
         const enteredCapital = capitalInputRef.current.value;
         const enteredcurrency = currencyInputRef.current.value;
         const enteredLanguage = languageInputRef.current.value;

export default AddNewcountryForm;