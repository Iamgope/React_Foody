import CartIcon from '../Cart/CartIcon'
import classes from './HeaderButton.module.css'
const Button=(props)=>{
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}> <CartIcon/> </span>
        <span>My_Cart</span>
        <span className={classes.badge}>1</span>
    </button>
}

export default Button