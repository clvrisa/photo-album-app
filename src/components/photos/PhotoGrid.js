import { React, useState, useEffect } from 'react'
import PhotoItem from './PhotoItem'
import 'bootstrap/dist/css/bootstrap.min.css'

const PhotoGrid = ({ items, isLoading }) => {
  const [albums, setAlbums] = useState([])
  useEffect(() => {
  const groupBy = (items, key) => {
    return items.reduce((album, currentAlbum) => {
      (album[currentAlbum[key]] = album[currentAlbum[key]] || []).push(
        currentAlbum
      )
      return album
    }, {})
  }

  const albumsArray = groupBy(items, 'albumId')
  setAlbums(albumsArray)
  }, [])

  return isLoading ? (
    <h1>IsLoading</h1>
  ) : ( 
    <section className='cards'>
      {items.map((item) => (
      <PhotoItem key={item.id} item={item}></PhotoItem>
      ))}
    </section>
  )
}

export default PhotoGrid