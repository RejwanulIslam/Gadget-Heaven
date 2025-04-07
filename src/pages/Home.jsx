import React from 'react'
import Hading from '../compoment/Hading'
import { Link, Outlet, useLoaderData } from 'react-router-dom'
import Catagry from '../compoment/Catagry'


export default function Home() {
    const catagoris = useLoaderData()
    return (
        <div>
            <Hading title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
                subtitle={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}> </Hading>
            
            <Link to='/' className='text-2xl font-bold'>all data</Link>
            {
                catagoris.map(catagory => <Catagry catagory={catagory}></Catagry>)
            }

            <Outlet></Outlet>
        </div>
    )
}




