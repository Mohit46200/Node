import { createContext, useState } from "react";


export const Globalcontext = createContext()

const Globalprovider = ({children}) => {
    const [islogin,setIslogin] = useState(false)
    const [id,setId] = useState("")
    console.log(id)
    return (
            <Globalcontext.Provider value={{islogin,setIslogin,id,setId}}>
                {children}
            </Globalcontext.Provider>
    
    )

}

export default Globalprovider