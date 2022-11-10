import { NavLink } from 'react-router-dom'
import classes from './Message.module.css'
import React from 'react';


const Message = (props) => {

let text = React.createRef()
function addText(){
let message = text.current.value;
alert(message)
}

    return (
    <div>
    <div className={classes.message}>{props.message}</div>
    <textarea ref={text}></textarea>
    <button onClick={addText}>Add message</button>
    </div>
    )



}




export default Message