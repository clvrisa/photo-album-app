import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Author from './components/ui/Author'
import Footer from './components/ui/Footer'
import PhotoGrid from './components/photos/PhotoGrid'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://jsonplaceholder.typicode.com/photos`
      )
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
    const groupBy = (items, key) => {
      return items.reduce((album, currentAlbum) => {
        (album[currentAlbum[key]] = album[currentAlbum[key]] || []).push(
          currentAlbum
        )
        return album
      }, {})
    }
  
    const albumsArray = groupBy(items, 'albumId')
    console.log(albumsArray)
  }, [query])


  return (
    <div className='container'>
    <Header />
    <Author />
    <div class='grid'>
      <PhotoGrid isLoading={isLoading} items={items} />
    </div>
    <Footer />
    </div>
  )
}

export default App
