import {useRef,useState} from 'react'
import classes from './Checkout.module.css';
const isEmpty=(value)=>value.trim()==='';
const isSixChar=(value)=>value.trim().length ===6;

const Checkout = (props) => {

 const Nameref = useRef()
 const Streetref = useRef()
 const Pinref = useRef()
 const Addressref = useRef()
  
   const [formisValid,setformisValid]=useState({
     name:true,
     pin:true,
     street:true,
     address:true,
   })
  
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName=Nameref.current.value
    const enteredStreet=Streetref.current.value
    const enteredPin=Pinref.current.value
    const enteredAddress=Addressref.current.value;

    const enteredNameisvalid=!isEmpty(enteredName);
    const enteredStreetisvalid=!isEmpty(enteredStreet);
    const enteredAddressisvalid=!isEmpty(enteredAddress);
    const enteredPinisvalid=isSixChar(enteredPin);
   setformisValid({
     name:enteredNameisvalid,
     pin:enteredPinisvalid,
     street:enteredStreetisvalid,
     address:enteredAddressisvalid
   })

   props.onConfirm({
    name: enteredName,
    street: enteredStreet,
    city: enteredAddress,
    postalCode: enteredPin,
  });



  };

  const nameControlClasses = `${classes.control} ${
    formisValid.name ? '' : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    formisValid.street ? '' : classes.invalid
  }`;
  const postalCodeControlClasses = `${classes.control} ${
    formisValid.pin ? '' : classes.invalid
  }`;
  const addressControlClasses = `${classes.control} ${
    formisValid.address ? '' : classes.invalid
  }`;
 
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor='name'>Your Name</label>
        <input  ref={Nameref} type='text' id='name' />
        {!formisValid.name &&<p>Enter a valid name</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor='street'>Street</label>
        <input ref={Streetref} type='text' id='street' />
        {!formisValid.street &&<p>Enter a valid Street</p>}

      </div>
      <div className={postalCodeControlClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input ref={Pinref} type='number' id='postal' />
        {!formisValid.pin &&<p>Enter six digit long code</p>}

      </div>
      <div className={addressControlClasses}>
        <label htmlFor='city'>Address</label>
        <input ref={Addressref} type='text' id='address' />
        {!formisValid.address &&<p>Enter a valid Address</p>}

      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} >Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;