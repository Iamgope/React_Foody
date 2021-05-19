

import Modal from '../UI/Modal';
import Classes from './Cart.module.css'

const Cart=(props)=>{

    const Dummy_Cart=[
        {
            id:'001',
            name:'Biryani',
            amount:2,
            price:250,
        }
    ]
   const CartItems=(
       <ul className={['cart-items']}>
         {
             Dummy_Cart.map((item)=>
                 <li>
                     {item.name}
                 </li>
             )
         }
       </ul>
   );

   return <Modal>
       {CartItems}
       <div className={Classes.total}>
           <span>
               Total Amount
           </span>
           <span>
               500
           </span>
       </div>
       <div className={Classes.actions}>
       <button className={Classes.button}>Order</button>

           <button className={Classes['button--alt']} onClick={props.hideModal}>Close</button>
       </div>
   </Modal>
};

export default Cart;