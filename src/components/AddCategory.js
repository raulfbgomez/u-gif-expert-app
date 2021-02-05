import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({ setCategories }) => {

  const [input, setInput] = useState('')

  const handleInput = (e) => {
    const { value } = e.target
    setInput(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim().length > 2) {
      setCategories( prev => [input])
      setInput('')
    }
  }

  return (
    <>
      <form onSubmit={ handleSubmit }>
        <input 
          className='input' 
          type='text' 
          onChange={ handleInput }
          value={ input }
          placeholder='Buscar gifs...'
        />
      </form>
    </>
  )
}

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}

export default AddCategory
