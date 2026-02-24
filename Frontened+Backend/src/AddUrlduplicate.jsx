import { useState, useEffect } from "react"
import axios from "axios"

const AddUrl = () => {

    const [data, setData] = useState([])

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        gender: "",
        email: "",
        job_title: ""
    })

    const rowStyle = {
        display: "grid",
        gridTemplateColumns: "60px 150px 150px 120px 250px 150px",
        alignItems: "center",
        padding: "8px 0",
        borderBottom: "1px solid #ccc"
    }

    // GET Users
    const apidata = async () => {
        try {
            const res = await axios.get("http://localhost:8002/api/users")
            setData(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        apidata()
    }, [])

    // Handle Input Change
    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    // POST User
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8002/api/users", formData)

            // Refresh data
            apidata()

            // Clear form
            setFormData({
                first_name: "",
                last_name: "",
                gender: "",
                email: "",
                job_title: ""
            })

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Add data form here</h1>

                <input
                    type="text"
                    name="first_name"
                    placeholder="First Name"
                    value={formData.first_name}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="last_name"
                    placeholder="Last Name"
                    value={formData.last_name}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    value={formData.gender}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="user_name@gmail.com"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="job_title"
                    placeholder="Job Title"
                    value={formData.job_title}
                    onChange={handleChange}
                />

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

            {data.map((user, index) => (
                <div key={index} style={rowStyle}>
                    <h3>{index + 1}</h3>
                    <h3>{user.first_name}</h3>
                    <h3>{user.last_name}</h3>
                    <h3>{user.gender}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.job_title}</h3>
                </div>
            ))}
        </>
    )
}

export default AddUrl