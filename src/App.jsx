import { useState } from 'react'
import './App.css'
import Header from './pages/Header';
import Main from './pages/Main'
import Section from './pages/Section'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Section />
    </>
  )
}

export default App
