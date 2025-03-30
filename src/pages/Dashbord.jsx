import React, { useContext } from 'react'
import { Dashbordcontex } from '../contex/Contex'
import DashbordCard from '../compoment/DashbordCard'

export default function Dashbord() {
  const { handleaddgajects, history, sethistory } = useContext(Dashbordcontex)
  console.log(history)
  return (
  <div>
    {
      history.map(his=><DashbordCard his={his}></DashbordCard>)
    }
  </div>
  )
}
