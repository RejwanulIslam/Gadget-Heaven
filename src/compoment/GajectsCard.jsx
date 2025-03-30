import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams, } from 'react-router-dom'
import Card from './Card'

export default function GajectsCard() {
  const data = useLoaderData()
  const {catagory} = useParams()
  
  console.log(catagory)
  console.log(data)
  const [card, setcard] = useState([])
  console.log(card)
  
    useEffect(()=>{
      
      if(catagory){
      const filterdByCatagory = [...data].filter(gajects => (gajects.category == catagory))
      setcard(filterdByCatagory)
      console.log('filterdByCatagory',filterdByCatagory)
      
    } else{
      setcard(data)
      console.log('card ok')
    }
   
   
    
    },[data,catagory])

  
 
  
  return (
    <div>
    <div className='grid md:grid-cols-2 lg:grid-cols-4'>
      {
        card.map(card => <Card card={card}></Card>)
      }
      </div>
    </div>
  )
}
