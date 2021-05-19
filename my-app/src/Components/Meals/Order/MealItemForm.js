import React,{useRef} from 'react'
import Input from '../../UI/Input';
import Classes from './MealItemForm.module.css'


const Form=(props)=>{
    const InputRef= useRef()

    const onSubmitHandler=(event)=>{
        event.preventDefault();
        const enteredAmount=InputRef.current.value;
        const enteredAmountNumber=+enteredAmount;
        
        props.onAddToCart(enteredAmountNumber);

        }

return <form className={Classes.form} onSubmit={onSubmitHandler}>
  <Input
  ref={InputRef}
  label="Amount"
  input={{
      id:'amount '+props.id,
      type:'number',
      min:'1',
      max:'10',
      defaultValue:'1',    
  }}
  />
    <button>+ Add</button>
</form>

}
export default Form;