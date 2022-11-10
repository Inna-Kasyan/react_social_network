import React from 'react';
import classes from './MyPost.module.css'

const MyPost = (props) => {


  return (
  
        <div className={classes.item}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYAHZ0lpBtlP8lXebTIEtnA5-gDxLrPaL-CA&usqp=CAU"/>
          {props.message}
          <div>
            <span>like </span> {props.likesCount}
          </div>
        </div>
    

  )
}

export default MyPost;