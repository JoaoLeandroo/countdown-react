import { useEffect, useState } from "react"

// 1 minute
const COUNTDOWN_INITIAL_TIME =  1 * 60

function App() {
  const [seconds, setSeconds] = useState(COUNTDOWN_INITIAL_TIME)

  useEffect(() => {
    if(seconds === 0) {
      alert("CONTADOR CHEGOU AO FIM")
      return
    }

    setTimeout(() => {
      setSeconds(state => state - 1)
    }, 1000);
  }, [seconds])

  const minute = Math.floor(seconds / 60)
  const second = seconds % 60

  return (
    <div>
      <span>{String(minute).padStart(2, '0')}</span>
      <span>:</span>
      <span>{String(second).padStart(2, '0')}</span>
    </div>
  )
}

export default App
