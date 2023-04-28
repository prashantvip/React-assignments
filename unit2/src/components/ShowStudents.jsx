import { useState, useEffect } from "react";

export const ShowStudents = () => {

  const [data, setData] = useState([])



  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/students")
      const result = await response.json();
      // console.log(result);
      setData(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])
  return (
    <div>
      <div className="controls">
        <div>
          Sort By:{" "}
          <select
            // select dropdown needs both value and onChange
            className="sortby"
          >
            <option value="first_name">First Name</option>
            <option value="gender">Gender</option>
            <option value="age">Age</option>
            <option value="tenth_score">10th Score</option>
            <option value="twelth_score">12th Score</option>
          </select>
        </div>
        <div>
          Order:
          <select
            // select dropdown needs both value and onChange
            className="sortorder"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <button className="sort">sort</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Age</th>
            <th>10th Score</th>
            <th>12th Score</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((user) => {
            // console.log(user);
            return (
              <tr className="row" key={user.id}>
                <td className="first_name">{user.first_name}</td>
                <td className="last_name">{user.last_name}</td>
                <td className="email">{user.email}</td>
                <td className="gender">{user.gender}</td>
                <td className="age">{user.age}</td>
                <td className="tenth_score">{user.tenth_score}</td>
                <td className="twelth_score">{user.twelth_score}</td>
                <td className="preferred_branch">{user.preferred_branch}</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  );
};
