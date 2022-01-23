import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import {useContext,useEffect, useState} from "react"
import CartContext from '../../store/cart-context';
import CartItem from "./CartItem"
import Cookies from 'js-cookie';
let counter=0
const Cart = (props) => {
  const[vip,setVip]=useState()
  let newdiscount;
    const cartCtx=useContext(CartContext)
    const {items,totalAmount}=useContext(CartContext)
    const setNewVip=async()=>{let isVip=Cookies.get("vip")
    setVip((prevstate)=>isVip)}
   useEffect(()=>{
    if(counter>1)return
    setNewVip()
    counter++


   },[])
    const hasItems = items.length > 0;
    console.log(items)
    let copyItems=[...items]
    let newAmount=0
    let newCoffeItem;
    let coffeItems=hasItems&&copyItems.filter((item)=>{
      if(item.name==="coffe")
      return  item
    })
   
    console.log("coffe items",coffeItems)
    if(hasItems&&coffeItems.length>1){
      for (let index = 0; index < coffeItems.length; index++) {
        newAmount  += coffeItems[index].amount
        
      }
      
       newCoffeItem=hasItems&&{...coffeItems[0],amount:newAmount?newAmount:coffeItems[0].amount}
       newAmount=0
  console.log("mew item coffe")
  console.log(newCoffeItem)
  console.log("more then 1")
  
    }

    else if(hasItems&&coffeItems.length===1){
      if(vip){
       newCoffeItem=[...coffeItems]
      //  console.log("in 1")
        newAmount=newCoffeItem[0].amount
       console.log(newAmount)
       newAmount=Math.floor(newAmount/10)
        newdiscount=newAmount*newCoffeItem[0].price
         console.log("new discount"+newdiscount)
         console.log("is vip",vip)
      }
     else{
       newAmount=0
       newdiscount=0
     }

    }
   
    

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
      };
    const RestItems=async()=>{
        // cartCtx.resetItems()
        props.onClose()
    }

      const cartItemAddHandler = (item) => {
        cartCtx.addItem({...item, amount: 1});
      };
    const cartItems = (
        <ul className={classes['cart-items']}>
          {items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              catagory={item.catgory}
              onRemove={cartItemRemoveHandler.bind(null, item.id)}
              onAdd={cartItemAddHandler.bind(null, item)}
            />
          ))}
        </ul>
      );


  return (
    <Modal>
   
    <div className={classes.total}>
      <span>Total Amount</span>
      
   {newdiscount?<span>you have discount of  {newAmount} coffee cups {totalAmount-newdiscount}</span>:<span>no discount coffee cups {totalAmount}</span>}
    </div>
     {cartItems}
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
    {hasItems&&  <button className={classes.button} onClick={RestItems}>Order</button>}
    </div>
  </Modal>
  );
};

export default Cart;
