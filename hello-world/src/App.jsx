import './App.css'
import { ChildA } from './Components1/Context/ContextChildren'
import ContextParent from './Components1/Context/ContextParent'

function App() {
  return (
    <>
      <div>
       <ContextParent>
        <ChildA />
       </ContextParent>
      </div>
    </>
  )
}

export default App
