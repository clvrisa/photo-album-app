import React from 'react'

const PhotoItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.thumbnailUrl} alt='Photo Thumbnail' />
        </div>
        <div className='card-back'>
          <h1>Album #{item.albumId}</h1>
          <h1 style = {{textAlign:'right'}}>{item.id}</h1>
          <ul>
            <li>
              {item.title}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default PhotoItem