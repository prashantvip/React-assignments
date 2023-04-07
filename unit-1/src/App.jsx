import { useState } from 'react'
import './App.css'

function App() {
  const [score, setScore] = useState({
    score: 76,
    wicket: 2,
    ball: 50
  })

  const handleScore = (value) => {
    setScore((previousScore) => {
      return { ...previousScore, score: score.score + value }
    })
  }

  const handleBalls = () => {
    setScore((previousScore) => {
      return { ...previousScore, ball: score.ball + 1 }
    })
  }

  const handleWicket = () => {
    if (score.wicket >= 10)
      return
    setScore((previousScore) => {
      return { ...previousScore, wicket: score.wicket + 1 }
    })
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{" "}
          <h1 className="scoreCount">
            {
              score.score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              score.wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
              Math.floor(score.ball / 6) + "." + (score.ball % 10)
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => handleScore(1)}>Add 1</button>
        <button className="addScore4" onClick={() => handleScore(4)}>Add 4</button>
        <button className="addScore6" onClick={() => handleScore(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={handleWicket}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={handleBalls}>Add 1</button>
      </div>

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
      <h2>
        {score.score >= 100 ? "India wins" : "India loses"}
      </h2>
    </div>
  );
}

export default App;