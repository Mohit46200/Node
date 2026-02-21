import { createBrowserRouter ,Navigate } from "react-router-dom"
import AddUrlchild from "./AddUrlchild"
import Layout from "./Layout"


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Navigate to={"/addurl"}/>
            },
            AddUrlchild()
        ]
    }
])

export default Router