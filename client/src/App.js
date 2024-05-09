import React, { useState } from 'react'
import './App.css'
import SimplePaper from './components/SimplePaper'
import FormFirstStep from './components/FormFirstStep'
import { useLocation, useNavigate } from 'react-router-dom'
import RadioBtns from './components/RadioBtns'
import DateRanges from './components/DateRanges'

function App() {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const [form, setForm] = useState({})
  const [wheel, setWheel] = useState()

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSubmitting(false)
      setForm(values)
      navigate('/step2')
    }, 500)
  }
  const onSubmitForm2 = (values) => {
    setWheel(values)
    navigate('/step3')
  }

  function renderSwitch(param) {
    switch (param) {
      case '/':
        return <FormFirstStep {...{ form, onSubmit }} />
      case '/step2':
        return <RadioBtns {...{ onSubmitForm2 }} />
      case '/step3':
        return <DateRanges />
      default:
        return <FormFirstStep {...{ form, onSubmit }} />
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <SimplePaper>{renderSwitch(pathname)}</SimplePaper>
      </header>
    </div>
  )
}

export default App
