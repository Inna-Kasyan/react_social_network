import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'
import Message from './Message/Message'
import DialogItem from './DialogItem/DialogItem'




const Dialogs = (props) => {

let state = props.dialogsPage;


    let dialogsElements = state.dialogs.map(d => <DialogItem id={d.id} name={d.name} />)




    let messagesElements = state.messages.map(m =>  <Message message={m.message} id={m.id}/> )

    let onSendMessageClick = () => {
       props.sendMessage();
    }

    let newMessageBody = state.newMessageBody;

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
       
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
            <div>
            <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message'></textarea></div>
            <div><button onClick = {onSendMessageClick}>Send</button></div>
            </div>
        </div>
    )

}

export default Dialogs