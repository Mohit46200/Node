import { useContext } from "react"
import { Globalcontext } from "./globalcontext"
import { Navigate } from "react-router-dom"


const Login = () => {

    const {islogin,setIslogin} = useContext(Globalcontext)
            console.log(islogin)

    const submit = (e) => {
        console.log(islogin)
        setIslogin(true)
        console.log(islogin)


    }
    if(islogin){
        return <Navigate to={"/addurl"}/>
    }


    return (
            <div style={{ 
                height: "100vh", 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                backgroundColor: "#f5f5f5"
            }}>
                <div style={{
                background: "white",
                padding: "30px",
                borderRadius: "10px",
                width: "300px",
                display: "flex",
                flexDirection: "column",
                gap: "15px"
                }}>

                <div>
                    <input
                    type="email"
                    placeholder="Enter Email"
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px"
                    }}
                    />
                </div>

                <div>
                    <input
                    type="password"
                    placeholder="Enter Password"
                    style={{
                        width: "100%",
                        padding: "10px",
                        fontSize: "16px"
                    }}
                    />
                </div>

                <button 
                onClick={submit}
                style={{
                    padding: "10px",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "16px"
                }}>
                    Submit
                </button>

                </div>
            </div>
        )
}

export default Login