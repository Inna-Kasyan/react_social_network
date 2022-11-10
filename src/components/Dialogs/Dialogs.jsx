import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'



const Dialogs = (props) => {




    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)




    let messagesElements = props.state.messages.map(m =>  <Message message={m.message} id={m.id}/> )


    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
        </div>
    )

}

export default Dialogs