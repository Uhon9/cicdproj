import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>Hello Vite + React</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(c => c + 1)}>Click Me</button>
    </div>
  );
}

export default App;
