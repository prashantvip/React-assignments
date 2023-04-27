import { useEffect, useState } from "react"


const Table = () => {
    const [formData, setFormData] = useState([]);
    const [page, setPage] = useState(1)

    const fetchData = async () => {
        const response = await fetch(`http://localhost:3000/forms?_page=${page}&_limit=3`)
        const result = await response.json()
        setFormData(result);
    }

    useEffect(() => {
        fetchData();
    }, [page])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>address</th>
                        <th>salary</th>
                    </tr>
                </thead>
                <tbody>
                    {formData.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.address}</td>
                                <td>{item.salary}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <button onClick={() => setPage(page - 1)}>prev</button>
            <button onClick={() => setPage(page + 1)}>next</button>
        </div>
    )
}

export default Table