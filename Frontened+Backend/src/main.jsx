import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import Router from './router'
import Globalprovider from './globalcontext'


createRoot(document.getElementById('root')).render(
    <Globalprovider>
         <RouterProvider router={Router}/>        
    </Globalprovider>
   
 
)

