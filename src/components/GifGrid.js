import React from 'react'
import GifGridItem from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      { loading && <p>Buscando...</p> }
      { images.length > 0 ?
        <>
          <h3 className='subtitle'>Resultados para { category }</h3>
          <div className='card-grid'>
            { images.map( image => (
              <GifGridItem key={ image.id } { ...image } />
            ))
            }
          </div>
        </>
      :
        <p className='no-results'>No se encontrarón resultados para { category }.</p>
      }
    </>
  )
}

export default GifGrid
