import React from 'react';
import {BrowserRouter as Router,Route, Link } from 'react-router-dom';
const menus = [{
  name: 'Trang chu',
  to: '/',
  exact: true
},
{
  name: 'Quan ly SP',
  to: 'ProductList', exact: false
}
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => 
{
  return (<Route
    path={to} 
    exact={activeOnlyWhenExact} 
    children={({ match }) =>{
    var active = match ? 'active' : '';
      return (<li className={active}>
        <Link to={to}>{label}</Link>
      </li>);
    }}/>);
}
class Menu extends React.Component {
  render() {
    return (

      <div className="navbar navbar-default">
        <a className="navbar-brand" href="/">IPA</a>
        <ul className="nav navbar-nav">
         {this.showMenu(menus)}
        </ul>
      </div>
    );
  }
  showMenu=(menus)=>{
   var rs=null;
   if(menus.length>0){
     rs=menus.map((menu,index)=>{
     return(
<Router key={index} ><MenuLink label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact}/></Router>
     );})
   }
    return rs;
  }
}

export default Menu;
