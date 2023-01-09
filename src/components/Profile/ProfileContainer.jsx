import React from 'react'
import Profile from './Profile'
import { connect } from "react-redux";
import {getUserProfile } from '../../redux/profile-reducer'
import {useParams} from 'react-router-dom'

import { Navigate } from 'react-router';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

function withRouter(Children){
    
    return(props)=>{
       const match  = {params: useParams()};
    
       return <Children {...props}  match = {match}/>
   }
 }

class ProfileContainer extends React.Component {

    componentDidMount(){
     
        const userId = this.props.match.params.userId || 2;
        this.props.getUserProfile(userId);

    }



    render() {
        
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}



let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToPropsForRedirect = (state) => ({
isAuth: state.auth.isAuth
})

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile, 

    })



export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,

)(ProfileContainer)