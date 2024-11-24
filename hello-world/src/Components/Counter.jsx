import { useState, useMemo } from 'react';

function Counter() {
const [counterOne, setCounterone] = useState(0)
const [counterTwo, setCounterTwo] = useState(0)

const incrementOne = () => {
    setCounterone(counterOne + 1)
}

const incrementTwo = () => {
    setCounterTwo(counterTwo + 1)
}

const isEven = useMemo(() => {
    let i = 0
    while (i < 20000000) i++
    return counterOne % 2 === 0
}, [counterOne])

return (
<div>
    <div>
        <button onClick={incrementOne}>Count One - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
    </div>
    <div>
        <button onClick={incrementTwo}>Ount Two - {counterTwo}</button>
    </div>
</div>
)
}

export default Counter;
