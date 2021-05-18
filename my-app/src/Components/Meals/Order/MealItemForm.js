
import Input from '../../UI/Input';
import Classes from './MealItemForm.module.css'
const Form=(props)=>{
return <form className={Classes.form}>
  <Input
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