import React, { useContext } from 'react'
import { Dashbordcontex } from '../contex/Contex'
import Favoritecard from './Favoritecard'

export default function Favorite() {
    const {favorite} = useContext(Dashbordcontex)
  return (
    <div>
        <h1 className='text-4xl'>favorite</h1>
      {
        favorite.map(card => <Favoritecard card={card}></Favoritecard>)
      }
    </div>
  )
}
