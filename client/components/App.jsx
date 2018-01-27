import { getAllTags } from '~/utils/tagsAndEvents'
import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('hi', getAllTags())
    return (
      <div> 🔥 Ready? </div>


    )
  }
}


//export default () => '🔥 Readyyyyyy.'