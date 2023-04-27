import { useEffect, useState } from "react"


const Table = () => {
    const [formData, setFormData] = useState([]);

    const fetchData = async () => {
        const response = await fetch("http://localhost:3000/forms")
        const result = await response.json()
        setFormData(result);
    }

    useEffect(() => {
        fetchData();
    }, [])
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
        </div>
    )
}

export default Table