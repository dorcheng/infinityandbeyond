import { getAllTags } from '~/utils/tagsAndEvents'
import React, { Component } from "react";
import Login from './Login'
import AllEvents from './AllEvents'
import Navbar from './Navbar'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: ["Basketball 1/27 5pm", "Computer Lab 2/2 3pm", "Painting 2/17 9-5pm", "Job Fair 2/4 10-3pm", "Dance Class 1/31 7-8pm"]
    }
    this.renderTags = this.renderTags.bind(this);
  }

  componentDidMount(){
    // const tags = getAllTags();
    // console.log('did', tags);
    // const newTags = tags;
    // console.log('newTags', newTags);
    // this.setState({tags: newTags}, function(){
    //   console.log('state updated', this.state);
    // });
    // this.forceUpdate(function(){
    //   console.log('updated?!?!?!')
    // })
  }

  renderTags(){
    const tags = getAllTags();
    return tags;
  }


  render() {
    const { events } = this.state
    return (
      <div>
      <Navbar />
      <Login />
      <AllEvents />

      <div className="header">
        <div className="header__logo-box">
          <img src="img/add.png" alt="logo" className="header__logo"/>
        </div>
        <div className="header__text-container">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Hackathon!</span>
          <span className="heading-primary--sub">Select an event</span>
        </h1>
        {events.length ? events.map((tag, idx) => {
            console.log('tag?',tag)
              return <a href="#" key={tag} className="btn btn--white btn--animated" id={`btn${idx+1}`}> {tag} </a>
      
            }) : <p></p>
          }
      </div>
    </div>
    </div>
    )
  }
}


//export default () => '🔥 Readyyyyyy.'
