import React, { Fragment } from 'react'
import mealsImage from '../../assets/meals.jpg'
import classes from './Header.Module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShow} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='this is a very amazing resturant' />
      </div>
    </Fragment>
  )
}

export default Header
