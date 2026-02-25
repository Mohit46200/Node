import { createBrowserRouter ,Navigate } from "react-router-dom"
import AddUrlchild from "./AddUrlchild"
import Layout from "./Layout"
import Loginchild from "./Loginchild"


const Router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Navigate to={"/addurl"}/>
            },
            AddUrlchild(),
            Loginchild()
        ]
    }
])

export default Router