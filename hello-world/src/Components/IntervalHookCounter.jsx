import {useEffect, useState} from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }

    function doSomething() {
      console.log(someProp)
    }

    useEffect (() => {
      doSomething
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])

  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter;
