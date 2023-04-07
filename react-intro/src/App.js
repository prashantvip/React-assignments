import "./App.css";

const os = ["android", "blackberry", "ios", "windows"];
const mobArr = [
  { name: "Samsung", style: "square" },
  { name: "HTC", style: "square" },
  { name: "Micromax", style: "disc" },
  { name: "Apple", style: "circle" },
];
function App() {
  return (
    <div>
      <h2>Mobile Operating System</h2>
      {os.map((el) => {
        return (
          <ul>
            <li>{el}</li>
          </ul>
        );
      })}
      <h2>Mobile Manufacturers</h2>
      {mobArr.map((el) => {
        return <li className={el.style}>{el.name}</li>;
      })}
    </div>
  );
}

export default App;
