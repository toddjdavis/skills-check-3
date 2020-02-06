import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {logout} from '../ducts/reducer'


class Nav extends Component {
    logout = () => {
        axios.get('/auth/logout').then(
            ()=> {}
            )
            this.props.history.push('/')
    }
    render(){
        console.log(this.props)
        if(this.props.location.pathname === '/'){
            return <></>
        }else {
            return(
                <div>
                    <button onClick={this.logout}>Logout</button>
                    <Link to='/dashboard'>Home</Link>
                    <Link to='/form'>New Post</Link>
                    <span>Hello {this.props.user.username.username}</span>
                </div>
            )
        }
    }   
    
}

function mapStateToProps(state){
    return{
        user: state
    }
}

export default withRouter(connect(mapStateToProps, {logout})(Nav))