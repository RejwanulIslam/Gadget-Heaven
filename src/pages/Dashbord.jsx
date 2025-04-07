import React, { useContext, useState } from 'react'
import { Dashbordcontex } from '../contex/Contex'
import DashbordCard from '../compoment/DashbordCard'

export default function Dashbord() {
  const { handleaddgajects, history, sethistory } = useContext(Dashbordcontex)
  console.log(history)
  const [his, sethis] = useState(history)
  const handlesortedhistory = () => {
    const sorted = [...history].sort((a, b) => a.price - b.price)
    sethis(sorted)
  }
  return (
    <div>
      <button onClick={() => handlesortedhistory()} className='btn btn-neutral'>sorted by prise</button>
      <div className='grid md:grid-cols-2 lg:grid-cols-4'>
        {
          his.map(his => <DashbordCard his={his}></DashbordCard>)
        }
      </div>
    </div>
  )
}
