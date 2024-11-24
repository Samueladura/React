import {useState} from 'react';
import Child from './Child';

const Parent = () => {
    console.log('Parent Render')
    const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setCount(0)}>Count to 0</button>
      <button onClick={() => setCount(5)}>Count to 5</button>
      <Child />
    </div>
  );
}

export default Parent;

