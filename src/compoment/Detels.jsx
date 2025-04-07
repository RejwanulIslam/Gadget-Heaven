import React, { createContext, useContext, useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Dashbordcontex } from '../contex/Contex'
import { MdFavorite } from 'react-icons/md'

export default function Detels() {
    const { handleaddgajects, handleFavorute, history } = useContext(Dashbordcontex)
    console.log(history)
    const [detels, setdetels] = useState({})
    const { product_id, product_title, product_image,rating,Processor, category,Specification, price, description } = detels

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
            <div className=" flex  h-[567px] w-[1100px] bg-base-100 shadow-xl">
                <div >
                    <figure><img className='h-[450px] rounded-lg w-[424px]' src={product_image} alt="Shoes" /></figure>
                </div>
                <div>
                    <div className="card-body">
                        <h2 className="card-title">{product_title}</h2>
                        <p> prise:{price}$</p>


                        <p className='text-xl font-bold'>Specification</p>
                       <p>{description}</p>
                       <p>Raring:{rating}</p>

                        <div className="card-actions justify-end">

                            <button onClick={() => handleaddgajects(detels)} className="btn btn-primary">Addcoffee</button>
                            <button onClick={() => handleFavorute(detels)} className="btn btn-primary"><MdFavorite /></button>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

