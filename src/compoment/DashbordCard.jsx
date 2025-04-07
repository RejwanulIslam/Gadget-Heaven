import React from 'react'

export default function DashbordCard({his}) {

  
    const { product_id, product_title, product_image, category, price, description } = his

  return (
    <div> 
       <div>
      
    <div className="card card-compact w-72 bg-base-100 shadow-xl">
      <figure><img src={product_image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>{price}</p>
        
       
        
      </div>
    </div>
      </div>
      </div>
  )
}
