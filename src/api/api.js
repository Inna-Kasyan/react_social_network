import axios from 'axios'
import { follow } from '../redux/users-reducer';

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/'
    })

    export const usersAPI = {
        getUsers(currentPage = 1, pageSize = 10) {
            return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
             .then( response => {
                 return response.data;
             });
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
   
    unfollow(userId){
      return  instance.delete(`follow/${userId}`)
   },
   getProfile(userId){
    return instance.get(`profile/${userId}`)
   }

}

export const authAPI = {
   me(){
   return instance.get(`auth/me`)
   }
}