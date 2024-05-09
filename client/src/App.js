import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import SimplePaper from './components/SimplePaper'
import FormFirstStep from './components/FormFirstStep'
import RadioBtns from './components/RadioBtns'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimplePaper>
          {/* <FormFirstStep /> */}
          <RadioBtns />

          {/* <Link to="/team">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
          </Link> */}
        </SimplePaper>
      </header>
    </div>
  )
}

export default App
