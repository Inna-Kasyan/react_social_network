import { NavLink } from 'react-router-dom'
import classes from './Friends.module.css'

const Friends = (props) => {


    let friendsName = props.sidebar.friends.map(f => {
    return (
        <div className={classes.friend}>
        <div className={classes.photo}></div>
    <div>{f.name} </div>
    </div>
    )
    })


    return (
        <div>
        <div>Friends</div>
        <div className={classes.friends}>

               {friendsName}
         
        </div>
        </div>
    )

}

export default Friends
