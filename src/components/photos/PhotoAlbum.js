import React from 'react'
import PhotoItem from './PhotoItem'

const PhotoAlbum = ({ items }) => {
  return (
    <div className='album'>
      {items.map((item) => (
      <PhotoItem key={item.id} item={item}></PhotoItem>
      ))}
    </div>
  )
}

export default PhotoAlbum