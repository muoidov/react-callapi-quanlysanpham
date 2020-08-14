import React from 'react';
import './App.css';
import Menu from './components/Menu/Menu';

import router from './router';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
class App extends React.Component {

  showContentMenu=(router)=>{
var rs=null;
if(router.length>0){
  rs=router.map((router,index)=>
  
{return <Route key={index} path={router.path} exact={router.exact} component={router.main}/>});}

return <Router><Switch>{rs}</Switch> </Router> 
} 

  render(){
  return (
    <div>
    <Menu/>
    <div className="container">
      
      <div className="row">
        {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          
          <button type="button" className="btn btn-info">ADD SAN PHAM</button><br/>
          <br/>
          
              <ProductList/>
          </div> */}
          {this.showContentMenu(router)}
        </div>
      </div>
      
    </div>
  );
}}

export default App;
