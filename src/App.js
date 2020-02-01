import React,{Component} from 'react';
import './App.css';
import Nav from './components/Nav'
import routes from './routes'
import {connect} from 'react-redux'



class App extends Component {
  
  render(){
    return (
        <div className="App">
            <Nav />
            {routes}
        </div>
    );
  }
}
function mapStateToProps(state){
  return{
    reducer: state.loggedIn
  }
}

export default connect()(App);
