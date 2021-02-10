import React, { useState, useEffect } from "react";
import ResultScreen from "./ResultScreen";
import "./App.css";

const App = () => {
  const [clicks, setClicks] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [isStarted, setStart] = useState(false);

  useEffect(() => {
    if (isStarted && seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  }, [isStarted, seconds]);

  const handleStart = () => {
    setStart(true);
  };

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const button = isStarted ? (
    <button onClick={handleClick}>Click!</button>
  ) : (
    <button onClick={handleStart}>Begin</button>
  );

  let content = (
    <div className={"content"}>
      <h1>
        Time left: <br />
      </h1>
      <h3>
      {seconds} seconds
      </h3>
      <h1>
        Num of Clicks: <br />
      </h1>
      <h3>
        {clicks}
      </h3>
      {button}
    </div>
  );

  if (seconds === 0) content = <ResultScreen clicks={clicks} />;
  return (
    <React.Fragment>
      <div className={"header"}>
        <h1>Clickgame</h1>
      </div>

      {content}
    </React.Fragment>
  );
};

export default App;
