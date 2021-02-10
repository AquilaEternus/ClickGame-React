import React from "react";

const ResultScreen = (props) => {
  let resultText;

  if (props.clicks < 100) resultText = <h2>Too Slow!</h2>;
  else if (props.clicks >= 100 && props.clicks < 300)
    resultText = <h2>I guess you're pretty good...</h2>;
  else if (props.clicks >= 300)
    resultText = <h2>You used a bot, don't lie!</h2>;
    
  return (
    <div className={"content"}>
      {resultText}
      <br />
      <h1>
        Total Clicks: <br /> {props.clicks}
      </h1>
    </div>
  );
};

export default ResultScreen;
