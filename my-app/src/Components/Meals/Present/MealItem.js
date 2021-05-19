import {useContext} from 'react';
import Classes from './MealItem.module.css'
import Form from '../Order/MealItemForm'
import CartContext from '../../../store/Cart-context'
const MealItem=(props)=>{

  const context = useContext(CartContext)
    const onAddToCartHandler=(amount)=>
    {
        context.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,
        })
    }
    ///const price=`₹${props.price}`;
    return <li className={Classes.meal}>
        <div>
         <h3>{props.name}</h3>
         <div className={Classes.description}>{props.description}</div>
         <div className={Classes.price}>₹ {props.price}</div>
        </div>
        <div>
            <Form id={props.id} onAddToCart={onAddToCartHandler}/>
        </div>
    </li>
}
export default MealItem;