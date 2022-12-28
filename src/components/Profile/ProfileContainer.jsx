import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect } from "react-redux";
import {setUserProfile, } from '../../redux/profile-reducer'
import {useParams} from 'react-router-dom'

function withRouter(Children){
    
    return(props)=>{
       const match  = {params: useParams()};
    
       return <Children {...props}  match = {match}/>
   }
 }

class ProfileContainer extends React.Component {

    componentDidMount(){
     
        const id = this.props.match.params.userId || 2

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`).then(response => {
            this.props.setUserProfile(response.data)
        })
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

export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))
