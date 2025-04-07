import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Card({ card }) {
  const { product_id, product_title, product_image, category, price, description } = card

  return (
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
    <figure><img src={product_image} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{product_title}</h2>
      <p>Prise:{price}</p>
      <Link to={`/detels/${product_id}`}>
      <div className="card-actions justify-end">
       
        <button className="btn btn-primary">View detels</button>

      </div>
      </Link>
    </div>
  </div>
  )
}
