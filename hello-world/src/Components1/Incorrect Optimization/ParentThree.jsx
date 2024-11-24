import {useState} from 'react';
import { MemoizedChildFour } from './ChildFour';

const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setname] = useState('Samuel');

    console.log('ParentThree Render')
    
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setname('Adura')}>Change name</button>
      <MemoizedChildFour name={name} />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
        </MemoizedChildThree>  */}
    </div>
  );
}

export default ParentThree;

