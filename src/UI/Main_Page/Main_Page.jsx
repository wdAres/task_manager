import React, { useState } from 'react'
import Card_Container from '../../Components/Card_Container/Card_Container'
import Form from '../../Components/Form/Form'
import classes from './Main_Page.module.css'


const TaskArray = [

]

const Main_Page = () => {

    const [taskList, setTaskList] = useState(TaskArray)

    const saveTask = (enteredTask) => {
        const newTask = {
            ...enteredTask,
            id: Math.random().toString()
        }
        setTaskList((prevState) => {
            return [newTask, ...prevState]
        })
    }

    const delHandler = (id) => {
      setTaskList((current) => current.filter((element) => element.id !== id))
    }

    return (
        <section className={classes.main_section}>
            <h1 className={classes.heading}>Task Manager</h1>
            <p className={classes.sub_heading}>Let's make sure to complete every task!</p>
            <div className={classes.main_section_divider}>
                <div className={classes.main_left}>
                    <Form onAddTask={saveTask} />
                </div>
                <div className={classes.main_right}>
                    <Card_Container onDelete={delHandler} arr={taskList} />
                </div>
            </div>
        </section>
    )
}

export default Main_Page
