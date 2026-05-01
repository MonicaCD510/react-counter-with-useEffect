import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([0]);

  useEffect(() => {
    const saveTimer = setTimeout(() => {
      localStorage.setItem("counterValue", count);
      console.log("Count saved:", count);
    }, 500);

    return () => clearTimeout(saveTimer);
  }, [count]);

  const handleIncrement = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const handleDecrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory([...history, newCount]);
  };

  const handleReset = () => {
    setCount(0);
    setHistory([0]);
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>

      <label>Step Value: </label>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />

      <br />
      <br />

      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>

      <h3>History:</h3>
      <p>{history.join(", ")}</p>
    </div>
  );
}

export default App;