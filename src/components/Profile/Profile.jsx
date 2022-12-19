import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div className={classes.content}>
<ProfileInfo />
<MyPostsContainer/>
    </div>
  )
}

export default Profile;













// newPostText = {props.profilePage.newPostText} 
// posts = {props.profilePage.posts} 
// updateNewPostText = {props.updateNewPostText}
// addPost={props.addPost}