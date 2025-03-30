import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/Home";

import GajectsCard from "../compoment/GajectsCard";
import Detels from "../compoment/Detels";
import Dashbord from "../pages/Dashbord";




const route = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('../catagoris.json'),
                children: [

                    {
                        path: '/gajects/:catagory',
                        element: <GajectsCard></GajectsCard>,
                        loader: () => fetch('../data.json')

                    },
                    {
                        path: "/",
                        element: <GajectsCard></GajectsCard>,
                        loader: () => fetch('../data.json')

                    }
                ]



            },
            {
                path: "/detels/:id",
                element: <Detels></Detels>,
                loader: () => fetch('../data.json')


            },
            {
                path:"/dashbord",
                element:<Dashbord></Dashbord>

            }
        ]

    }

])
export default route;