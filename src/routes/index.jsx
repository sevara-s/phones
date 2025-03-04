import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainLayout from "../layout";
const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
        
           
        ]
    }
])
export default function AppRoutes(){
    return <RouterProvider router={router}/>
}