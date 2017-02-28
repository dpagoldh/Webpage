import React from "react";
import {Link} from "react-router";
export const Header = (props) =>{

  return(
  <nav className="navbar navbar-inverse bg-inverse" >
    <div className="container">
      <div className="navbar-header">
        <ul className="nav navbar-nav">
          <li>  <Link to={"/home"} activeStyle={{color:"#ffffff"}} activeClassName={"active"}>Home</Link></li>
          <li>  <Link to={"/user"} activeStyle={{color:"#ffffff"}} activeClassName={"active"}>User</Link></li>
        </ul>

      </div>
    </div>
  </nav>
  );

};
