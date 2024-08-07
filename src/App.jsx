import React,{useState} from 'react'
import { CounterContex } from './context/counter'
import Counter1 from './components/Counter1'

function App() {
 const[counter,setcounter]=useState(0)
 
  return (
   <CounterContex.Provider value={{counter,setcounter}}>
  <Counter1/>
    <button onClick={()=>setcounter(counter+1)}>counter:{counter}</button>
   </CounterContex.Provider>

   
  )
}

export default App
