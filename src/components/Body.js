import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from './Browse';
import Home from "./Home";

const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])

    return (
        <div>
            <RouterProvider router={appRouter}>
            </RouterProvider>
        </div>
    )
}

export default Body;