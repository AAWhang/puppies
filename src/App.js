import React, { Component } from 'react'
import Puppy from './puppy'
import './App.css'
import BlueBox from './img/blue.jpg'
import RedBox from './img/red.jpg'
import GreenBox from './img/green.jpg'

class App extends Component {
  constructor() {
    super()
    this.state = {
      img: BlueBox
    }
    //function binds
    this.redbox = this.redbox.bind(this)
    this.bluebox = this.bluebox.bind(this)
    this.greenbox = this.greenbox.bind(this)
  }

  redbox() {
    this.setState({ img: RedBox })
  }

  bluebox() {
    this.setState({ img: BlueBox })
  }

  greenbox() {
    this.setState({ img: GreenBox })
  }

  render() {
    return(
      <div className="App" onMouseDown={this.greenbox} onMouseUp={this.redbox} onMouseEnter={this.redbox} onMouseLeave={this.bluebox}>
        <header className="App-header">
          Hello World
        <img src={this.state.img} />
        </header>
      </div>
    )
  }
}

export default App;
