import React, { Fragment } from 'react'
import classes from './Model.module.css'
import reactDom from 'react-dom'

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide}></div>
}

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children} </div>
    </div>
  )
}

const modelElement = document.getElementById('overlays')

const Model = (props) => {
  return (
    <Fragment>
      {reactDom.createPortal(<BackDrop onHide={props.onHide} />, modelElement)}
      {reactDom.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        modelElement
      )}
    </Fragment>
  )
}

export default Model
