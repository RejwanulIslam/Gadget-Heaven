import React from 'react'
import { Link } from 'react-router-dom'

export default function Catagry({catagory}) {
  return (
    <div>
        
        <Link  className='text-2xl font-bold' to={`/gajects/${catagory.name}`}>
        <p>{catagory.name}</p>
        </Link>
    </div>
  )
}
