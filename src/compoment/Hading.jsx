import React from 'react'

export default function ({title, subtitle}) {
  return (
    <div>
    <h1 className='text-3xl '>{title}</h1>
    <p>{subtitle}</p>
    </div>
  )
}
