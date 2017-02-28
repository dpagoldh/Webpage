import React from "react";
import {browserHistory} from "react-router";
export class User extends React.Component{

  onNavigateHome(){
    browserHistory.push("/home")
  }

  render(){

    return(
    <div>
      <h3>User: {this.props.route.name}</h3>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

      <button onClick={this.onNavigateHome} className ="btn btn-default">Home</button>

    </div>
    )
  }
}
