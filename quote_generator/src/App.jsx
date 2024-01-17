import { useState } from 'react'
import './App.css'
import { getQuote } from './getQuote'
import { Quote } from './Components/Quote'

function App() {
  const [quote, setQuote] = useState()

  const updateQuote = async () => {
    const data = await getQuote()
    console.log(data)
    setQuote(data)
  }

  return (
    <>
      <h1>Quote Generator</h1>
      <h2>Your daily motivational quote!</h2>
      <button onClick={updateQuote}>Get quote now!</button>
      {quote && <Quote quote={quote} />}
    </>
  )
}

export default App
