import { createContext, useState } from "react";


export const Globalcontext = createContext()

const Globalprovider = ({children}) => {
    const [islogin,setIslogin] = useState(false)

    return (
            <Globalcontext.Provider value={{islogin,setIslogin}}>
                {children}
            </Globalcontext.Provider>
    
    )

}

export default Globalprovider