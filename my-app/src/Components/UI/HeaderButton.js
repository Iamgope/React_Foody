import React, {useContext} from 'react';
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderButton.module.css'
import CartContext from '../../store/Cart-context'
const Button=(props)=>{

    const context = useContext(CartContext);
    const NumberOfItems=context.items.reduce((curr,item)=>{
        return curr+item.amount;
    },0);
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon/> </span>
        <span>My_Cart</span>
        <span className={classes.badge}>{NumberOfItems}</span>
    </button>
}

export default Button