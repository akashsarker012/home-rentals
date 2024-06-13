import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Category'
import Lisiting from '../components/Lisiting'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Lisiting/>
    </div>
  )
}
