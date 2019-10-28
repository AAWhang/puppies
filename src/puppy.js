import React, { Component } from 'react'
import Wander from './img/wander.jpg'
import Bat from './img/bat.jpg'
import Stare from './img/stare.jpg'
import StatusSheet from './component/statusSheet'

class Puppy extends Component {
  constructor() {
    super()
    this.state = {
      img: Wander,
      score: 0
    }
    //function binds
    this.stare = this.stare.bind(this)
    this.wander = this.wander.bind(this)
    this.bat = this.bat.bind(this)
  }

  stare() {
    let x = this.state.score
    x++
    this.setState({ img: Stare, score: x })
  }

  wander() {
    this.setState({ img: Wander })
  }

  bat() {
    this.setState({ img: Bat })
  }

  render() {

    return(
      <div className="App" onMouseDown={this.bat} onMouseUp={this.stare} onMouseEnter={this.stare} onMouseLeave={this.wander}>
        <img src={this.state.img} />
        <StatusSheet score={this.state.score} />
      </div>
    )
  }
}

export default Puppy;
