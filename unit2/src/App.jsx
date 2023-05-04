import { useState } from "react";
import { AddStudent } from "./components/AddStudent";
import { ShowStudents } from "./components/ShowStudents";

function App() {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }
  return (
    <div className="App">
      <button className="togglebtn" onClick={handleClick}>
        {show ? (
          <div>
            <button>go to list</button>
            <AddStudent />
          </div>
        ) : (<div>
          <button>add student</button>
          <ShowStudents />
        </div>)}
      </button>
      {/* Show either  AddStudent component or ShowStudents dependeing on the above button click  */}
      {/* make sure the table is shown initially, do not show form initially */}
      {/* make sure to show either of them do not both together */}
    </div>
  );
}

export default App;
