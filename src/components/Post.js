import React, {Component} from 'react'
import axios from 'axios'

class Post extends Component {
    constructor(){
        super()
        this.state={
            image_url: '',
            title: '',
            body: ''
        }
    }

    componentDidMount(){
        axios.get(`/api/post/${this.props.match.params.id}`).then(res => {
            console.log(res.data)
            this.setState({
                image_url:res.data.image_url,
                title: res.data.title,
                body: res.data.body
            })
        })

    }
    render(){
        console.log(this.props)
        const {image_url, body, title} = this.state
        return(
            <div>
                <h1>{title}</h1>
                <img src={image_url} />
                <span>{body}</span>
            </div>
        )
    }
}

export default Post