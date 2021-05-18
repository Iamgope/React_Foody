import Classes from './MealItem.module.css'
import Form from './Order/MealItemForm'

const MealItem=(props)=>{
    ///const price=`₹${props.price}`;
    return <li className={Classes.meal}>
        <div>
         <h3>{props.name}</h3>
         <div className={Classes.description}>{props.description}</div>
         <div className={Classes.price}>₹ {props.price}</div>
        </div>
        <div>
            <Form id={props.id}/>
        </div>
    </li>
}
export default MealItem;