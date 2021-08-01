import React from 'react'
import classes from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious food, Delievered to you </h2>
      <p>
        Choose your favourite meals from our available meals and enjoy a
        delicious lunch or dinner at home
      </p>
      <p>
        All our meals are cooked with high quality ingridents, just-in-time and
        ofCourse by an exprienced chef!
      </p>
    </section>
  )
}

export default MealsSummary
