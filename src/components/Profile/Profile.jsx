import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {


  return (
    <div className={classes.content}>
<ProfileInfo />
<MyPosts 
posts={props.profilePage.posts}
newPostText={props.profilePage.newPostText}
addPost={props.addPost}
updateNewPostText={props.updateNewPostText}
/>
    </div>
  )
}

export default Profile;













// newPostText = {props.profilePage.newPostText} 
// posts = {props.profilePage.posts} 
// updateNewPostText = {props.updateNewPostText}
// addPost={props.addPost}