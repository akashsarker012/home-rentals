import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Category'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
    </div>
  )
}
