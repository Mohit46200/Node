import { useState } from "react"

const addUrl = () =>{
    const [data, setData] = useState("")
    const [url,setUrl] = useState([])
    const submit = (e) => {
        e.preventDefault()
        setUrl((prev) => [...prev,data])
        setData("")
    }
    return (
        <>
            <form onSubmit={submit}>
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
            {url.map((data,index) => {
                return <h3>{data}</h3>
            })}
        </>
    )
}

export default addUrl