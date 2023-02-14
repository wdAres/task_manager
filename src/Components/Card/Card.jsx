import React from 'react'
import classes from './Card.module.css'


const Card = (props) => {

  return (
    <div key={props.id} className={classes.card}>
      <h3 className={classes.card_heading}>{props.heading}</h3>
      <div className={classes.card_difficulty}>{props.difficulty}</div>
      <p className={classes.card_para}>
        {props.para}
      </p>
      <div onClick={()=>{props.onDeletingTask(props.id)}} className={classes.delBtn}><i className="fas fa-trash-alt"></i></div>
    </div>
  )
}

export default Card