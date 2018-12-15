import React, { Component } from "react"
import "./App.css"

import QUOTES from "./data/quotes.json"

class App extends Component {
  render() {
    return (
      <div className="center">
        <h1>RandomQuote</h1>
        {QUOTES.map(quote => {
          return (
            <div key={quote.id}>
              <p>{quote.text}</p>
              <p>— {quote.author}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default App
