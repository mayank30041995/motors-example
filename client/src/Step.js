import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Link } from 'react-router-dom'

function Step() {
  return (
    <Link to="/test2">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </Link>
  )
}

export default Step
