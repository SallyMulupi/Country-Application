
import React from 'react'
import {useRef} from 'react'
import './addNewForm.css'
function AddNewCountryForm(props) {
    const flagInputRef = useRef();
    const countryInputRef = useRef();
    const capitalInputRef = useRef();
    const currencyInputRef = useRef();
    const languageInputRef = useRef();
    function submitHandler(e){
        e.preventDefault();

         const enteredflag= flagInputRef.current.value;
         const enteredCountry = countryInputRef.current.value;
         const enteredCapital = capitalInputRef.current.value;
         const enteredcurrency = currencyInputRef.current.value;
         const enteredLanguage = languageInputRef.current.value;
         const countryDetails={
            Flag:enteredFalg,
            Country:enteredCapital,
            Capital:enteredCapital,
        Currency:enteredCurrency,
            Language:enteredLanguage,
        };
        props.onAddCountry(countryDetails)
    }
    return(
        <div className='Card'>
    <form className='form' onSubmit={submitHandler}>
    <div className='control'>
            <label htmlFor='flag'>Country Flag</label>
            <input type="url"  required id="flag" ref={flagInputRef} />
        </div>
    <div className='control'>
            <label htmlFor='name'>Country Name</label>
            <input type="text"  required id="name" ref={capitalInputRef}/>
        </div>
        <div className='control'>
            <label htmlFor='capital'>Country capital</label>
            <input type="text"  required id="type" ref={capitalInputRef}/>
        </div>
        <div className='control'>
            <label htmlFor='currency'>Country Currency</label>
            <input type="text"  required id="year" ref={currencyInputRef}/>
        </div>
        <div className='control'>
            <label htmlFor='language'>Country Language</label>
            <textarea id="language" required rows='5'ref={languageInputRef} />
        </div>
        <div className='actions'>
            <button>Add Meetup</button>
        </div>
    </form>
  </div>
  )
}
export default AddNewcountryForm;