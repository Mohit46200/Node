import axios from "axios"
import { useEffect, useState } from "react"

const AddUrl = () => {
    const [data, setData] = useState("")
    const [urls, setUrls] = useState([])

    useEffect(() => {
        fetchUrls()
    }, [])

    const fetchUrls = async () => {
        try {
            const res = await axios.get("http://localhost:9001/url/allurls")
            setUrls(res.data)
        } catch (err) {
            console.log("GET ERROR:", err)
        }
    }

    const submit = async (e) => {
        e.preventDefault()

        if (!data.trim()) return

        try {
            await axios.post("http://localhost:9001/url", {
                url: data
            })

            fetchUrls()
            setData("")
        } catch (err) {
            console.log("POST ERROR:", err)
        }
    }

    return (
        <div>
            <h2>Add URL</h2>

            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Enter URL"
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>

            <table border="1">
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Original Link</th>
                    </tr>
                </thead>
                <tbody>
                    {urls.map((item, index) => (
                        <tr key={item.shortId}>
                            <td>{index + 1}</td>
                            <td>{item.redirectURL}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AddUrl