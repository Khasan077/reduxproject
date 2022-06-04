import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Counter() {
   const dispatch = useDispatch();
   const counter = useSelector((state) => state.counter)
   const show = useSelector((state) => state.showCounter)

   const incrementHandler = (amount) => {
      dispatch({type: 'increment', amount: amount})
   }

   const decrementHandler = () => {
      dispatch({type: 'decrement'})
   }

   const toggleCounterHandler = () => {
      dispatch({type: 'toggle'})
   }

  return (
    <div>
       {show && <div> <h2>Counter: {counter}</h2></div>}
       <div>
          <button onClick={() => incrementHandler(1)} className='btn btn-primary m-2'>Increment</button>
          <button onClick={() => incrementHandler(5)} className='btn btn-warning m-2'>Increment 5</button>
          <button onClick={decrementHandler} className='btn btn-danger'>Decrement</button>
       </div>
       <button className='btn btn-secondary m-2' onClick={toggleCounterHandler}>Toggle Counter</button>
    </div>
  )
}
