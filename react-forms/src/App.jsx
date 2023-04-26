import { useState } from 'react'
import './App.css'

// const frameworks = ['Marketing', 'Operations', 'Finance', 'Sales']

function App() {
  const [user, setUser] = useState({
    name: '',
    age: '',
    address: '',
    salary: ''
  })

  const [maritalStatus, setMaritalStatus] = useState(false)

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleMarital = (e) => {
    setMaritalStatus(e.target.maritalStatus);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    console.log(maritalStatus)
  }

  return (
    <>
      <h2>user info</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name : </label>
        <input type="text" name="name" value={user.name} onChange={handleChange} />
        <label htmlFor="age">Age : </label>
        <input type="number" name="age" value={user.age} onChange={handleChange} />
        <label htmlFor="address">Address : </label>
        <input type="text" name="address" value={user.address} onChange={handleChange} />
        <label htmlFor="salary">Salary : </label>
        <input type="text" name="salary" value={user.salary} onChange={handleChange} />
        <label htmlFor="maritalStatus">Marital Status </label>
        <input type="checkbox" name="maritalStatus" checked={maritalStatus} onChange={handleMarital} />
        <button type='submit'>submit</button>
      </form>
    </>
  )
}

export default App
