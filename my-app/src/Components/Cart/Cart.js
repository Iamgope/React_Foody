
import {useContext,useState} from 'react';
import Modal from '../UI/Modal';
import Classes from './Cart.module.css'
import CartContext from '../../store/Cart-context'
import CartItem from './CartItem';
import Checkout from '../Meals/Order/Checkout';
const Cart=(props)=>{
    //const [hasItem, sethasItem] = useState(false)
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSub,setisSub]=useState(false);
    const [didSub,setdidSub]=useState(false);

   const context = useContext(CartContext);
   const totalAmountValue=context.totalAmount.toFixed(2);
   const hasItem=context.items.length>0;
   const onAddHandler=(item)=>{
     context.addItem({...item,amount:1});
   }
   const onRemoveHandler=(id)=>{
       context.removeItem(id);
   }

   const orderHandler = () => {
    setIsCheckout(true);
  };


  const submitOrderHandler = async (userData) => {
      setisSub(true);
    await fetch('https://swapi-e0254-default-rtdb.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: context.items
      })
    });
    setisSub(false);
    setdidSub(true);
    context.clearCart();
  };

   const CartItems=(
       <ul className={Classes['cart-items']}>
         {
             context.items.map((item)=>
                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={onAddHandler.bind(null,item)} onRemove={onRemoveHandler.bind(null,item.id)}/>
             )
         }
       </ul>
   );
const isSubContent=<p className={Classes.warnings}>Sending your order...</p>
const didSubmitContent=<>
<p className={Classes.warnings}>Successfully sent the order!</p>
      <div className={Classes.actions}>
      <button className={Classes.button} onClick={props.hideModal}>
        Close
      </button>
    </div>
</>

const cartModalContent=<>
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
       {hasItem &&<button className={Classes.button} onClick={orderHandler}>Order</button>}

           <button className={Classes['button--alt']} onClick={props.hideModal}>Close</button>
       </div>
       {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.hideModal}/>}
</>
   return <Modal onClose={props.hideModal}>
         {!isSub && !didSub && cartModalContent}
         {isSub && isSubContent}
         {!isSub && didSub && didSubmitContent}
   </Modal>
};

export default Cart;