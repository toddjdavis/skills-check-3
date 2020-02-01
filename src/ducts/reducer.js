import axios from 'axios'

const initialState = {
    loggedIn: false,
    username: ''
}


// login(){
//     const{username, password} = this.state
//     axios.post('/auth/login', {username, password}).then(
//         () => {
//             alert('Logged In')
//             this.setState({username: '', password: ''})
//         }).catch(error => {alert(error.response.request.response)})
// }

const REGISTER = 'REGISTER'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'


export const register = (username, password) => {
    let data = axios.post('/auth/register', {username, password}).then(res => res.data)
    return{
        type: REGISTER,
        payload: data
    }
}
export const login = (username, password) => {
    let data = axios.post('/auth/login', {username, password}).then(res => res.data)
    return{
        type: LOGIN,
        payload: data
    }
}
export const logout = () => {
    let data = axios.post('/auth/logout').then(res => res.data)
    return{
        type: LOGOUT,
        payload: data
    }
}


export default function reducer(state= initialState, action){
    switch(action.type){
        case REGISTER + '_FULFILLED':
            return{...state, username: action.payload, loggedIn: true}
        case LOGIN + '_FULFILLED':
            return{...state, username: action.payload, loggedIn: true}
        case LOGOUT + '_FULFILLED':
            return{...state,  username: action.payload, loggedIn: false}
        default:
            return state
    }
}