import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Dashbordcontex } from '../contex/Contex'

export default function Detels() {
const {handleaddgajects, history}=useContext(Dashbordcontex)
console.log(history)
    const [detels, setdetels] = useState({})
    const { product_id, product_title, product_image, category, price, description } = detels
    
    const { id } = useParams()
    const data = useLoaderData()
    console.log(data)
    console.log(id)
    useEffect(() => {
        const Detels = data.find(data => data.product_id == id)
        setdetels(Detels)
    }, [id, data])
    console.log(detels)


    console.log(history)
  

    return (
        <div>
            <div className="card card-compact w-80 bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>

                    <div className="card-actions justify-end">

                        <button onClick={() => handleaddgajects(detels)} className="btn btn-primary">Addcoffee</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

