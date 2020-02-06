import React, {useState} from 'react'
import {connect} from 'react-redux'
import {create} from '../ducts/reducer'
import {withRouter} from 'react-router-dom'

function Form() {
    const [inputs, handleInputs] = useState({title: '', body: '', inputImage_url: ''})

    // const routeToDashboard =()=>{
    //     this.props.history.push('/dashboard')
    // }
    
        return(
            <div>
                <h1>Title</h1>
                <input value={inputs.title} onChange={(e)=> handleInputs({... inputs, title:e.target.value})} />
                <h1>body</h1>
                <textarea value={inputs.body} onChange={(e)=> handleInputs({... inputs, body:e.target.value})} />
                <h1>Image Url</h1>
                <input value={inputs.image_url} onChange={(e)=> handleInputs({... inputs, image_url:e.target.value})} />
                <p>{inputs.title}</p>
                <p>{inputs.body}</p>
                <p>{inputs.image_url}</p>
                <button onClick={()=> {create(inputs.title, inputs.body, inputs.image_url)}}> Submit</button>
            </div>
        )
    
}
function mapStateToProps(state){
    return{
        reducer: state
    }
}
export default withRouter(connect(mapStateToProps, {create})(Form))