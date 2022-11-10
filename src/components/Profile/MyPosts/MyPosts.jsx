import React from 'react';
import { addPost } from '../../../redux/state';
import classes from './MyPosts.module.css'
import MyPost from './Post/MyPost';

const MyPosts = (props) => {



let postsElement = props.posts.map( p => <MyPost message={p.message} likesCount={p.likesCount} />)
let newPostElement = React.createRef();

let addPost = () => {
  props.addPost();
}
let onPostChange = () => {
let text = newPostElement.current.value;
props.updateNewPostText(text);
}

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        New post
      </div>
      <div className={classes.post}>
        <div>
          <textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange}/>
          </div>
        <div><button onClick = { addPost }>Add post</button></div>
      </div>
      <div className={classes.posts}>
        
        {postsElement}
      </div>
    </div>

  )
}

export default MyPosts;

// let newPostElement = React.createRef();

// let onPostChange = () => {

//   let text = newPostElement.current.value;
//   props.updateNewPostText(text)
  
  
// }

// let addPost = () => {
//   props.addPost()
// }


// onChange={onPostChange} ref={newPostElement} value={props.newPostText}