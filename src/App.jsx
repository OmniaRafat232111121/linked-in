import React,{useEffect} from 'react'
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Header from './components/Header';
import { getUserAuth } from './redux/actions';
import { connect } from 'react-redux';
const App = (props) => {
  useEffect(() => {
  props.getUserAuth();
  }, [])
  return (
    <>
   
      <div className='app'>
      <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={
          <>
          <Header/>
          </>
        } />
      </Routes>
    </Router>
      </div>
   
    </>
  )
}
const mapStateToProps=(state)=>{
 return{}
}
const mapDispatchToProps=(dispatch) =>{
  return{
    getUserAuth:()=>dispatch(getUserAuth)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App)
