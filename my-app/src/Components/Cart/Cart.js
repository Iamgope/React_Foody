
import {useContext} from 'react';
import Modal from '../UI/Modal';
import Classes from './Cart.module.css'
import CartContext from '../../store/Cart-context'
import CartItem from './CartItem';
const Cart=(props)=>{
    //const [hasItem, sethasItem] = useState(false)
   const context = useContext(CartContext);
   const totalAmountValue=context.totalAmount.toFixed(2);
   const hasItem=context.items.length>0;
   const onAddHandler=(item)=>{
     
   }
   const onRemoveHandler=(id)=>{
   
   }

   const CartItems=(
       <ul className={Classes['cart-items']}>
         {
             context.items.map((item)=>
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={onAddHandler} onRemover={onRemoveHandler}/>
             )
         }
       </ul>
   );

   return <Modal onClose={props.hideModal}>
       {CartItems}
       <div className={Classes.total}>
           <span>
               Total Amount
           </span>
           <span>
           ₹{totalAmountValue}
           </span>
       </div>
       <div className={Classes.actions}>
       {hasItem &&<button className={Classes.button}>Order</button>}

           <button className={Classes['button--alt']} onClick={props.hideModal}>Close</button>
       </div>
   </Modal>
};

export default Cart;