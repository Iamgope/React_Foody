
import {useContext,useState} from 'react';
import Modal from '../UI/Modal';
import Classes from './Cart.module.css'
import CartContext from '../../store/Cart-context'
const Cart=(props)=>{
    //const [hasItem, sethasItem] = useState(false)
   const context = useContext(CartContext);
   const totalAmountValue=context.totalAmount.toFixed(2);
   const hasItem=context.items.length>0;
   

   const CartItems=(
       <ul className={['cart-items']}>
         {
             context.items.map((item)=>
                 <li>
                     {item.name}
                 </li>
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
           ₹ {totalAmountValue}
           </span>
       </div>
       <div className={Classes.actions}>
       {hasItem &&<button className={Classes.button}>Order</button>}

           <button className={Classes['button--alt']} onClick={props.hideModal}>Close</button>
       </div>
   </Modal>
};

export default Cart;