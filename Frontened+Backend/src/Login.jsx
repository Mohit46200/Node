import { useContext ,useState} from "react"
import { Globalcontext } from "./globalcontext"
import { Navigate } from "react-router-dom"
import axios from "axios";


const Login = () => {

    const {islogin,setIslogin} = useContext(Globalcontext)
    const [login,setLogin] = useState({
        email:"",
        password:""
    })

    
    if(islogin){
        return <Navigate to={"/addurl"}/>
    }

    const change = (e) => {
        setLogin((prev) => {
            return {...prev,
                [e.target.name]:e.target.value
            }
        })
    }

    const formsubmit = async(e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8002/api/users/login",login)
            setLogin({
                email:"",
                password:""
            })
            setIslogin(true)
        }
        catch(error) {
            console.log(error)
        }
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
                <form onSubmit={formsubmit}>
                    <div>
                        <input
                        type="email"
                        placeholder="Enter Email"
                        value={login.email}
                        onChange={change}
                        name="email"
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
                        value={login.password}
                        onChange={change}
                        name="password"
                        style={{
                            width: "100%",
                            padding: "10px",
                            fontSize: "16px"
                        }}
                        />
                    </div>

                    <button 
                    type="submit"
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
                </form>
                </div>
            </div>
        )
}

export default Login