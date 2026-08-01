import { useState } from "react";
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = (good / all) * 100;

  if (all === 0) return <h2>No feedback given</h2>;
  return (
    <div>
      <h1>statistics</h1>
      <table border={1}>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive + "%"} />
        </tbody>
      </table>
    </div>
  );
};
const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handleGood = () => {
    setGood(good + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button text="good" onClick={handleGood} />
        <Button text="neutral" onClick={handleNeutral} />
        <Button text="bad" onClick={handleBad} />
      </div>

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};
export default App;
