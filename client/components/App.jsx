import { getAllTags } from '~/utils/tagsAndEvents'
import React, { Component } from "react";
import Login from './Login'
import AllEvents from './AllEvents'
import Navbar from './Navbar'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('hi', getAllTags())
    return (
      <div>
      <div> 🔥 Ready? </div>
      <Navbar />
      <Login />
      <AllEvents />
      </div>
    )
  }
}


//export default () => '🔥 Readyyyyyy.'
