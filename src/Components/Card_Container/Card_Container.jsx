import React from 'react'
import Card from '../Card/Card'
import classes from './Card_Container.module.css'


const Card_Container = (props) => {
  
  const taskList = props.arr ;

  const ifListIsNone = <p className={classes.emptyListNotice}>List Is Empty! Kindly Add A Task</p>

  return (
    <div className={classes.card_container}>
      {
        taskList.length > 0 ?
        taskList.map((element,index)=>(
          <Card onDeletingTask={props.onDelete} key={index} id={element.id} heading={element.heading} difficulty={element.difficulty} para={element.para} />
        )) : ifListIsNone
      }
    </div>
  )

}

export default Card_Container