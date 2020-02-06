import React, {Component} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            post: []
        }
    }

    componentDidMount(){
        axios.get('/api/posts').then(results => {
            this.setState({post: results.data})
        }).catch(err => console.log(err))
    }

    singlePost = (id) => {
        this.props.history.push(`/post/${id}`)
    }

    render(){
        console.log(this.state.post[1])
        const posts = this.state.post.map((el)=> {
            return(
                <div onClick={()=> this.singlePost(el.post_id)} >
                    <h2>{el.title}</h2>
                    <h4>{el.username}</h4>
                    <img src={el.image_url} />
                    <span>{el.body}</span>
                </div>
            )
        })
        return(
            <div>{posts}</div>
        )
    }
}

export default withRouter(Dashboard)