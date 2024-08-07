import React,{useContext} from 'react'
import { CounterContex } from '../context/counter'

const Counter1 = () => {
    const count=useContext(CounterContex)
   
  return (
    <div>
      <h1><button>count</button></h1>
    </div>
  )
}

export default Counter1
