import { useState ,useEffect} from "react"
import axios from "axios"


const addUrl = () =>{
    const [data, setData] = useState([])
    const rowStyle = {
    display: "grid",
    gridTemplateColumns: "60px 150px 150px 120px 250px 150px",
    alignItems: "center",
    padding: "8px 0",
    borderBottom: "1px solid #ccc"
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
            <div style={{ ...rowStyle, fontWeight: "bold", borderBottom: "2px solid black" }}>
                <h3>Sno.</h3> 
                <h3>First Name</h3>
                <h3>Last Name</h3>
                <h3>Gender</h3>
                <h3>Email</h3>
                <h3>Job Title</h3>
            </div>

            {data.map((user,index) => {
                return <div style={rowStyle}>
                    <h3>{index+1}</h3>
                    <h3>{user.first_name}</h3>
                    <h3>{user.last_name}</h3>
                    <h3>{user.gender}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.job_title}</h3>
                    </div>
                
            
            })}
            
           
        </>
    )
}

export default addUrl