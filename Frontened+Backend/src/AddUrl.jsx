import { useState } from "react"

const addUrl = () =>{
    const [data, setData] = useState("")
    const [url,setUrl] = useState([])
    const submit = (e) => {
        e.preventDefault()
        setUrl((prev) => [...prev,data])
        setData("")
    }
    const flex = {
  display: "flex",
  gap: "50px"
}
const gap = {
  marginRight: "50px"
}
    return (
        <>
            <form onSubmit={submit} >
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
            {url.map((data,index) => {
                return <div style={flex}>
                    <h2 style={gap}>{index+1}</h2>
                    <h2>{data}</h2>
                </div>
            })}
           
        </>
    )
}

export default addUrl