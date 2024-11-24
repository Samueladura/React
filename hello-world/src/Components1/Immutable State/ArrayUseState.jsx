import {useState} from 'react';

const initState = ['Samuel', 'Adura' ]

const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)

    const handleClick = () => {
        // persons.push('Bukunmi')
        // persons.push('Temilorun')
        // setPersons(persons)

        const newPersons = [...persons]
        newPersons.push('Bukunmi')
        newPersons.push('Temilorun')
        setPersons(newPersons)
    }

    console.log('ArrayUseState Render')

  return (
    <div>
      <button onClick={handleClick}>Click</button>
      {
        persons.map(person => (
            <div key={person}>{person}</div>
        ))
      }
    </div>
  );
}

export default ArrayUseState;
