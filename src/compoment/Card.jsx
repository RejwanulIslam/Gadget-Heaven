import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Card({ card }) {
  const { product_id, product_title, product_image, category, price, description } = card

  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{product_title}</h2>
      <p>{price}</p>
      <Link to={`/detels/${product_id}`}>
      <div className="card-actions justify-end">
       
        <button className="btn btn-primary">Buy Now</button>

      </div>
      </Link>
    </div>
  </div>
  )
}
