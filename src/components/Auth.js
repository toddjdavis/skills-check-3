import React, {Component} from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import {register, login} from '../ducts/reducer'

class Auth extends Component {
    constructor(){
        super()
        this.state={
            username: '',
            password: ''
        }
        this.handleChangePassword=this.handleChangePassword.bind(this)
        this.handleChangeUsername=this.handleChangeUsername.bind(this)
        this.check=this.check.bind(this)
        
    }
    check(){
        // console.log('hit')
        this.props.history.push('/dashboard')
        
    }
    handleChangeUsername(value){
        this.setState({
            username: value
        })
    }
    handleChangePassword(value){
        this.setState({
            password: value
        })
    }
    render(){
        // console.log(this.props)
        // console.log(this.props.reducer)
        const {username, password} = this.state
        return(
            <div className='login-box'>
                <span>Hello</span>
                <div className='login'>
                    <input onChange={(e) => this.handleChangeUsername(e.target.value)}value={username} placeholder='Username' />
                    <input onChange={(e) => this.handleChangePassword(e.target.value)} value={password} placeholder='Password' />
                    <div>
                        <button onClick={() => {
                            this.props.register(username, password).then(() => this.check())
                        }}>Register</button>
                        <button onClick={() => {
                            this.props.login(username, password).then(() => this.check())
                        }}>Login</button>
                    </div>
                    
                </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        reducer: state.loggedIn
    }
    
}
export default connect(mapStateToProps, {register, login})(Auth)