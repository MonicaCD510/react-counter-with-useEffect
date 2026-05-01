import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

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

      <button onClick={() => setCount(count - step)}>Decrement</button>
      <button onClick={() => setCount(count + step)}>Increment</button>
    </div>
  );
}

export default App;