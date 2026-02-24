import { useState ,useEffect} from "react"
import axios from "axios"


const addUrl = () =>{
    const [data, setData] = useState([])
    const [postdata,setPostdata] = useState({
        first_name:"",
        last_name:"",
        gender:"",
        email:"",
        job_title:""
    })
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

    const postrequest = async(e) => {
        e.preventDefault()
            console.log("Post Data is:", postdata)  
        try{

            await axios.post("http://localhost:8002/api/users",postdata)
            setPostdata({
                first_name:"",
                last_name:"",
                gender:"",
                email:"",
                job_title:""
            })
            apidata()
        }
        catch(error) {
            consol.log(error)
        }
    }

    const change = (e) => {
        setPostdata((prev) => {
            return {
                ...prev,
            [e.target.name]: e.target.value

            }
        })

    }


    return (
        <>
            <form onSubmit={postrequest} >
                <h1>Add data form here</h1>
                <input
                type="text"
                placeholder="First_name"       
                value={postdata.first_name} 
                name="first_name"
                onChange={change}       
                ></input>
                <input
                type="text"
                placeholder="Last_name"   
                value={postdata.last_name} 
                name="last_name"
                onChange={change}       
                ></input>
                <input
                type="text"
                placeholder="Gender"   
                value={postdata.gender}  
                name="gender"
                onChange={change}       
                ></input>
                <input
                type="text"
                placeholder="user_name@gmail.com"           
                value={postdata.email} 
                name="email"
                onChange={change}       
                ></input>
                <input
                type="text"
                placeholder="Job_title"    
                value={postdata.job_title}  
                name="job_title"
                onChange={change}       
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