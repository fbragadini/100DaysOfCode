import './Quote.css'

export const Quote = ({ quote }) => {
  return (
    <div className='quote_div'>
      <p className='quote_quote'>{quote.quote}</p>
      <p className='quote_author'>{quote.author}</p>
    </div>
  )
}
