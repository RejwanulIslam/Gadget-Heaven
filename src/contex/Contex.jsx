import React, { createContext, useState } from 'react'
export const Dashbordcontex = createContext(null)

export default function Contex({children}) {
    const [history , sethistory] = useState([])
    const [favorite, setfavorite] =useState([])
    const handleaddgajects = (detels) => {
        

        const allhistory =[...history, detels]
       // sethistory(prev =>[...prev, detels])
        sethistory(allhistory)
       

    }
    
      const handleFavorute = (detels)=>{
        setfavorite ([...favorite,detels])
        console.log(favorite)
      }
    
  const  allvalue={
    handleaddgajects,
    history,
    sethistory,
    setfavorite,
    favorite,
    handleFavorute
    }
  return (
    <Dashbordcontex.Provider value={allvalue}>
        {children}
    </Dashbordcontex.Provider>
        
    
  )
}
