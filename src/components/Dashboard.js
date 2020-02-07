import React, {Component} from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class Dashboard extends Component {
    constructor(){
        super()
        this.state={
            post: [],
            toggle: false,
            input: ''
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
    toggleFun=()=>{
        this.setState({
            toggle: !this.state.toggle
        })
    }
    searchByTitle = (value) => {
        this.setState({input: value})
    }

    submitTitle = () => {
        const{input}=this.state
        console.log(input)
        axios.post('/api/search/title', {input}).then(res=>{
            this.setState({
                post: res.data
            })
        }).catch(err=>console.log(err))
    }
    submitBody =()=> {
        console.log('hit')
        const{input}=this.state
        console.log(input)
        axios.post('/api/search/body', {input}).then(res=>{
            this.setState({
                post: res.data
            })
        }).catch(err=>console.log(err))
    }
    clear =() =>{
        axios.get('/api/posts').then(results => {
            this.setState({post: results.data, input: ''})
        }).catch(err => console.log(err))
    }

    render(){
        console.log(this.state.post)
        // console.log(this.state.toggle)
        const posts = this.state.post.map((el)=> {
            return(
                <div className='posts' onClick={()=> this.singlePost(el.post_id)} >
                    <h2>{el.title}</h2>
                    <h4>{el.username}</h4>
                    <img className='posts-pic' src={el.image_url} />
                    <span>{el.body}</span>
                </div>
            )
        })
        return(
            <div>
                <input value={this.state.input} placeholder='Search by Title' onChange={(e)=> this.searchByTitle(e.target.value)}/>
                {this.state.toggle ? (<div>
                <button onClick={this.submitBody}>Submit</button>
                </div>) : (<div>
                <button onClick={this.submitTitle}>Submit</button>
                </div>)}
                <button onClick={this.clear}>Clear</button>
                <span>My Posts</span>
                <input type='checkbox' onChange={this.toggleFun}/>
                <div className='sorted-posts'>{posts}</div>
            </div>
        )
    }
}

export default withRouter(Dashboard)