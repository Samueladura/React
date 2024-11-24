import {useState} from 'react';

const initState = {
    fname: 'Samuel',
    lname: 'Adura'
}

const ObjectUseState = () => {

    const [person, setPerson] = useState(initState)

    const changeName =() => {
        // person.fname = 'Bukunmi'
        // person.lname = 'Temilorun'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = 'Bukunmi'
        newPerson.lname = 'Temilorun'
        setPerson(newPerson)
    }

    console.log('ObjectUseState Render')

  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  );
}

export default ObjectUseState;
