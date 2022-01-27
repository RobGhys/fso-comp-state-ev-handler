import React, { useState } from 'react'

const App = () => {
    // Add state to the component and renders it initialized with the value of zero
    // The counter variable is assigned the initial value of state which is zero
    // The variable setCounter is assigned to a function that will be used to modify the state
    const [ counter, setCounter ] = useState(0);

   const handleClick = () => {
       console.log('click click!');
   }

   const increaseByOne = () => setCounter(counter + 1);
   const setToZero = () => setCounter(0);

    return (
        <div>
            <div>{counter}</div>
            <button onClick={increaseByOne}>
                plus
            </button>
            <button onClick={setToZero}>
                reset
            </button>
        </div>
    )
}

export default App