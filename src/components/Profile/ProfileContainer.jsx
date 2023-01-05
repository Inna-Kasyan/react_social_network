import React from 'react'
import Profile from './Profile'
import { connect } from "react-redux";
import {getUserProfile } from '../../redux/profile-reducer'
import {useParams} from 'react-router-dom'


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

let mapStateToProps = (state) => ({
profile: state.profilePage.profile 
})

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer))
