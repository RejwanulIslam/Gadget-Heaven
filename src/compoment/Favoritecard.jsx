import React, { useContext } from 'react'
import { Dashbordcontex } from '../contex/Contex'

export default function Favoritecard({card}) {
    const { product_id, product_title, product_image, category, price, description } = card
      const {handleaddgajects} = useContext(Dashbordcontex)
  return (
    <div> 
    <div>
   
 <div className="card card-compact w-72 bg-base-100 shadow-xl">
   <figure><img src={product_image} alt="Shoes" /></figure>
   <div className="card-body">
     <h2 className="card-title">{product_title}</h2>
     <p>{price}</p>
     
     <div className="card-actions justify-end">
      
       <button onClick={()=>handleaddgajects(card)} className="btn btn-primary">Add to card</button>

     </div>
     
   </div>
 </div>
   </div>
   </div>
  )
}
