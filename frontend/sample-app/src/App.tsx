import { useEffect, useState } from 'react'
import './App.css'

const API_URL = "http://localhost:8000"; 

function App() {
  const [count, setCount] = useState(0)
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    fetch(`${API_URL}/`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error:", err));
  }, []);

  useEffect(() => {
    console.log(message);  // message が更新されるたびにログを表示
  }, [message]);

  return (
    <>
      <h1>Vite + React</h1>
      <h2>{message}</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          カウント回数： {count}
        </button>
      </div>
    </>
  )
}

export default App
