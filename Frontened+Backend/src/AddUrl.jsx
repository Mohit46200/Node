import { useState ,useEffect} from "react"
import axios from "axios"


const addUrl = () =>{
    const [data, setData] = useState([])
    const flex = {
        display: "flex",
        gap: "50px"
    }
    const gap = {
        marginRight: "50px"
    }

    const apidata = async () => {
        try {
            const res = await axios.get("http://localhost:8002/api/users")
            setData(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        apidata()
    }, [])


    return (
        <>
            <form  >
                <h1>Add url form here</h1>
                <input
                type="text"
                placeholder="https://www.example.com"
                value={data}
                onChange={(e) => {
                    setData(e.target.value)
                }}
                ></input>
                <button type="submit">Submit</button>

            </form>
            <div style={flex}>
                <h1>Sno.</h1> 
                <h1>URL</h1>
            </div>

            {data.map((user) => {
                return <h3>{user.first_name}</h3>
            })}
            
           
        </>
    )
}

export default addUrl