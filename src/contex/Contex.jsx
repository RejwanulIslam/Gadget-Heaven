import React, { createContext, useState } from 'react'
export const Dashbordcontex = createContext(null)

export default function Contex({children}) {
    const [history , sethistory] = useState([])
    const handleaddgajects = (detels) => {
        

        const allhistory =[...history, detels]
       // sethistory(prev =>[...prev, detels])
        sethistory(allhistory)
       

    }
  const  allvalue={
    handleaddgajects,
    history,
    sethistory
    }
  return (
    <Dashbordcontex.Provider value={allvalue}>
        {children}
    </Dashbordcontex.Provider>
        
    
  )
}
