import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [cartIsHighlighted, setCartIsHighlighted] = useState(false)

  const cartCtx = useContext(CartContext)

  const { items } = cartCtx

  const numberofCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button}  ${
    cartIsHighlighted ? classes.bump : ''
  }`

  useEffect(() => {
    if (items.length === 0) {
      return
    }
    setCartIsHighlighted(true)

    const timer = setTimeout(() => {
      setCartIsHighlighted(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberofCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
