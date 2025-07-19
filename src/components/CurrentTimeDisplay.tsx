import { useEffect, useState } from 'react'

export function CurrentTimeDisplay() {
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleString())
    }

    updateTime()
    const intervalId = setInterval(updateTime, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div id="current-time" data-testid="current-time">
      {currentTime}
    </div>
  )
}
