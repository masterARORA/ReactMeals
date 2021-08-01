import React, { useContext } from 'react'
import Model from '../UI/Model'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'

const Cart = (props) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = cartCtx.totalAmount.toFixed(2)

  const hasItems = cartCtx.items.length > 0

  const addButtonHandler = (item) => {
    cartCtx.addItems({ ...item, amount: 1 })
  }

  const removeButtonHandler = (id) => {
    cartCtx.removeItems(id)
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addButtonHandler.bind(null, item)}
          onRemove={removeButtonHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  )

  return (
    <Model onHide={props.onHide}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHide}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Model>
  )
}

export default Cart
