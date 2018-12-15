import React, { Component } from "react"
import "./App.css"

import QUOTES from "./data/quotes.json"

import random from "./helpers/random"

class App extends Component {
  constructor() {
    super()
    const chosenInt = random.getRandomInt(0, QUOTES.length - 1)
    const chosenQuote = QUOTES[chosenInt]
    this.state = {
      quote: chosenQuote
    }
  }

  getRandomQuote = () => {
    const chosenInt = random.getRandomInt(0, QUOTES.length - 1)
    const chosenQuote = QUOTES[chosenInt]
    this.setState({
      quote: chosenQuote
    })
  }

  render() {
    return (
      <div className="center">
        <h1>RandomQuote</h1>
        <button onClick={this.getRandomQuote}>Randomize</button>
        <div>
          <p>{this.state.quote.text}</p>
          <p>
            — <i>{this.state.quote.author}</i>
          </p>
        </div>
      </div>
    )
  }
}

export default App
