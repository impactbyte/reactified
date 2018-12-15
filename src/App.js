import React, { Component } from "react"
import "./App.css"

import QUOTES from "./data/quotes.json"

import random from "./helpers/random"

class App extends Component {
  render() {
    const chosenInt = random.getRandomInt(0, QUOTES.length - 1)
    const chosenQuote = QUOTES[chosenInt]

    return (
      <div className="center">
        <h1>RandomQuote</h1>
        <div>
          <p>{chosenQuote.text}</p>
          <p>
            — <i>{chosenQuote.author}</i>
          </p>
        </div>
      </div>
    )
  }
}

export default App
