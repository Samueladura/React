import {useState, useMemo, useCallback} from 'react';
import { MemoizedChildFive } from './ChildFive';

const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setname] = useState('Samuel');

    const person = {
        fname: 'Bukunmi',
        lname: 'Temilorun'
    }

    const memoizedPerson = useMemo(() => person, [])

    const handleClick = () => {}

    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('ParentFour Render')
    
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setname('Adura')}>Change name</button>
      {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
      <MemoizedChildFive name={name} handleClick={memoizedHandleClick} />
      {/* <MemoizedChildThree name={name}>
        <strong>Hello</strong>
        </MemoizedChildThree>  */}
    </div>
  );
}

export default ParentFour;

