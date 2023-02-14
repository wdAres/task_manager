import React, { useRef, useState } from 'react'
import classes from './Form.module.css'



const Form = (props) => {


    const enteredName = useRef();
    const enteredDifficulty = useRef();
    const enteredDetails = useRef();


    const submitHandler = (e) => {
        e.preventDefault()
        const object = {
            heading: enteredName.current.value,
            difficulty: enteredDifficulty.current.value,
            para: enteredDetails.current.value
        }
        
        props.onAddTask(object)

        enteredName.current.value = ''
        enteredDifficulty.current.value = 'not defined'
        enteredDetails.current.value = ''
    }


    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <h3>Add Task</h3>
            <input ref={enteredName} type="text" placeholder='Task Name' required />
            <select ref={enteredDifficulty} required>
                <option value='not defined'>Select Task Difficulty </option>
                <option value="urgent">Urgent</option>
                <option value="important">Important</option>
                <option value="relaxing">Relaxing</option>
            </select>
            <textarea ref={enteredDetails} placeholder='Write your task in more detail' required></textarea>
            <button className={classes.btn}>Save Task</button>
            
        </form>
    )
}

export default Form