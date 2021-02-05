export const getGifs = async ( category ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=vc6bsHT7kUh6vqNqxac5iHyUbHPKZFOQ&q=${encodeURI(
    category
  )}&limit=18`

  const response = await fetch(url)
  const { data } = await response.json()

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    }
  })
  
  return gifs
}
