import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shape-container">
        <a href="#" className="shape shape1"> Education</a>
        <a href="#" className="shape shape2"> Basketball</a>
        <a href="#" className="shape shape3"> Painting</a>
        <a href="#" className="shape shape4"> Music</a>
        <a href="#" className="shape shape5"> Job Search</a>
        <a href="#" className="shape shape6"> Arts</a>
        <a href="#" className="shape shape7"> Computers</a>
        <a href="#" className="shape shape8"> Other</a>
     </div>
    )
  }
}
