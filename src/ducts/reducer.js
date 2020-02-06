import axios from 'axios'

const initialState = {
    loggedIn: false,
    username: ''
}
const REGISTER = 'REGISTER'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const CREATE = 'CREATE'

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

export const create = (title, body, image_url) => {
    const {username} = initialState
    let data = axios.post('/api/post', {title,body, image_url, username}).then(res => res.data)
    return {
        type: CREATE,
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
        case CREATE + '_FULFILLED':
            return{...state, loggedIn:true}
        default:
            return state
    }
}