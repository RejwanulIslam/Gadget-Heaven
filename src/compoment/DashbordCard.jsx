import React from 'react'

export default function DashbordCard({his}) {
    const { product_id, product_title, product_image, category, price, description } = his

  return (
    <div> 
       <div>
      
    <div className="card card-compact w-80 bg-base-100 shadow-xl">
      <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>{price}</p>
        
        <div className="card-actions justify-end">
         
          <button className="btn btn-primary">Buy Now</button>
  
        </div>
        
      </div>
    </div>
      </div>
      </div>
  )
}
