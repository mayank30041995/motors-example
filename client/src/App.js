import React, { Component } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import SimplePaper from './components/SimplePaper'
import FormFirstStep from './components/FormFirstStep'
import RadioBtns from './components/RadioBtns'
import DateRanges from './components/DateRanges'

function App() {
  const onSubmit = (values, { setSubmitting }) => {
    console.log('setSubmitting', values)
    // Simulating asynchronous operation, like an API call
    setTimeout(() => {
      alert('Form is validated! Submitting the form...')
      setSubmitting(false)
    }, 1000)
  }
  return (
    <div className="App">
      <header className="App-header">
        <SimplePaper>
          {/* <FormFirstStep {...{ onSubmit }} /> */}
          <RadioBtns />
          {/* <DateRanges /> */}

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
