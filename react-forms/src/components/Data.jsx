import { useState } from 'react'

function Data() {
    const [user, setUser] = useState({
        id: '',
        name: '',
        age: '',
        address: '',
        salary: ''
    })
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }



    const handleSubmit = () => {
        // e.preventDefault();
        fetch("http://localhost:3000/forms", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
    }

    return (
        <>
            <h2>user info</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">id : </label>
                <input type="number" name="id" value={user.id} onChange={handleChange} />
                <label htmlFor="name">Name : </label>
                <input type="text" name="name" value={user.name} onChange={handleChange} />
                <label htmlFor="age">Age : </label>
                <input type="number" name="age" value={user.age} onChange={handleChange} />
                <label htmlFor="address">Address : </label>
                <input type="text" name="address" value={user.address} onChange={handleChange} />
                <label htmlFor="salary">Salary : </label>
                <input type="text" name="salary" value={user.salary} onChange={handleChange} />
                <button type='submit'>submit</button>
            </form>
        </>
    )
}

export default Data