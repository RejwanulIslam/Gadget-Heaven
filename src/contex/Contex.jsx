import React, { createContext, useState } from 'react'
export const Dashbordcontex = createContext(null)

export default function Contex({children}) {
    const [history , sethistory] = useState([])
    const [favorite, setfavorite] =useState([])
    console.log(favorite)

    const handleaddgajects = (detels) => {
        

        const allhistory =[...history, detels]
       // sethistory(prev =>[...prev, detels])
        sethistory(allhistory)
       

    }
    
      const handleFavorute = (detels)=>{
        const allfav =[...favorite, detels]
        setfavorite (allfav)
        console.log(allfav)
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
