import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
    constructor(){
        super()
        this.state={
            image_url: '',
            title: '',
            body: '',
            username: ''
        }
    }

    componentDidMount(){
        axios.get(`/api/post/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({
                image_url:res.data.image_url,
                title: res.data.title,
                body: res.data.body,
                username: res.data.username
            })
        })

    }
    render(){
        console.log(this.props)
        const {image_url, body, title, username} = this.state
        return(
            <div className='post'>
                <h1>{title}</h1>
                <img className='post-pic' src={image_url} />
                <h3>{username}</h3>
                <span>{body}</span>
            </div>
        )
    }
}

export default Post