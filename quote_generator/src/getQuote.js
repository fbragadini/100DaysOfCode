const category = 'inspirational';
const apiKey =import.meta.env.VITE_APIKEY

export const getQuote = async () => {
  

  try {
    const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
      method: 'GET',
      headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
      }
  })
  const data = await res.json()
  console.log(data[0])
  const quote = data[0]
  return quote
  } catch (error) {
    console.log(error)
  }

}