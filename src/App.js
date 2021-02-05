import React, { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const App = () => {

  const [categories, setCategories] = useState(['Hola'])

  return (
    <>
      <h1 className="title">Gif Search</h1>
      <div className="container">
        <AddCategory setCategories={setCategories} />

        <ol>
          {categories.map((category) => (
            <GifGrid key={category} category={category} />
          ))}
        </ol>
      </div>
      <footer className='footer'>
        <p>💻️ con mucha paciencia y 💙️ por <a href='https://twitter.com/raulfbgomez'>@raulfbgomez</a> </p>
      </footer>
    </>
  )
}

export default App
