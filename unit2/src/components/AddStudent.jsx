import { useState } from "react";

export const AddStudent = () => {
  const [user, setUser] = useState({
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    gender: '',
    age: '',
    tenth_score: '',
    twelth_score: '',
    preferred_branch: ''
  })
  const [err, setErr] = useState('')

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (user.first_name === "") {
      setErr("First Name missing");
    } else if (user.last_name === "") {
      setErr("Last Name missing");
    }
    else if (user.email === "") {
      setErr("Email missing");
    }
    else if (user.gender === "") {
      setErr("Gender missing");
    }
    else if (user.age === "") {
      setErr("Age missing");
    }
    else if (user.tenth_score === "") {
      setErr("tenth score missing");
    }
    else if (user.twelth_score === "") {
      setErr("12th Score missing");
    }
    else if (user.preferred_branch === "") {
      setErr("Preferred branch missing");
    }
    else if (user.age > 50) {
      setErr("age should not be greater than 50");
    } else if (user.tenth_score > 100 || user.twelth_score > 100) {
      setErr("10th and 12th score should not be greater than 100");
    } else {
      fetch("http://localhost:3000/students", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(user)
      })
    }

  }
  return (
    <form className="addstudent" onSubmit={handleSubmit}>
      <div>
        Firstname:{" "}
        <input
          type="text"
          name="first_name"
          className="first_name"
          placeholder="enter first name"
          value={user.first_name}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Last Name:
        <input
          type="text"
          name="last_name"
          className="last_name"
          placeholder="enter last name"
          value={user.last_name}
          onChange={handleChange}
        />
      </div>
      <div>
        {" "}
        Email:
        <input
          type="email"
          name="email"
          className="email"
          placeholder="enter email"
          value={user.email}
          onChange={handleChange}
        />
      </div>

      <div>
        Gender: {/* NOTE: radio boxes only work when they have same `name`. */}
        <div>
          Male
          <input
            name="gender"
            className="male"
            type="radio"
            value={"male"}
            onChange={handleChange}
          />{" "}
          Female{" "}
          <input
            name="gender"
            className="female"
            type="radio"
            value={"female"}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        Age{" "}
        <input
          type="number"
          name="age"
          className="age"
          placeholder="enter age"
          value={user.age}
          onChange={handleChange}
        />
      </div>
      <div>
        Tenth Score:{" "}
        <input
          type="number"
          name="tenth_score"
          className="tenth_score"
          placeholder="enter 10th score"
          value={user.tenth_score}
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        Twelth Score:{" "}
        <input
          type="number"
          name="twelth_score"
          className="twelth_score"
          placeholder="enter 12th score"
          value={user.twelth_score}
          onChange={handleChange}
        />{" "}
      </div>
      <div>
        <select
          value={user.preferred_branch} // select dropdown needs both value and onChange attributes
          name="preferred_branch"
          className="preferred_branch"
          onChange={handleChange}
        >
          <option value="law">law</option>
          <option value="commerce">commerce</option>
          <option value="science">science</option>
          <option value="sports">sports</option>
          <option value="arts">arts</option>
          <option value="acting">acting</option>
        </select>
      </div>

      <input className="submit" type="submit" value="Submit" />
      {
        // <div className="error"></div>
        // show this div with proper error before submitting form, if there's anything not provided
        // eg: first name missing, age cannot be greater than 100 etc
        err
      }
    </form>
  );
};
