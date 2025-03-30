import React from 'react'
import { Link } from 'react-router-dom'

export default function Catagry({catagory}) {
  return (
    <div>

        <Link to={`/gajects/${catagory.name}`}>
        <p>{catagory.name}</p>
        </Link>
    </div>
  )
}
