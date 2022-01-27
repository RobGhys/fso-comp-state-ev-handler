import React, { useState } from 'react'

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>
        {text}
    </button>
    )
}

const App = () => {
    // Add state to the component and renders it initialized with the value of zero
    // The counter variable is assigned the initial value of state which is zero
    // The variable setCounter is assigned to a function that will be used to modify the state
    const [ counter, setCounter ] = useState(0);

   const increaseByOne = () => setCounter(counter + 1);
   const decreaseByOne = () => setCounter(counter - 1);
   const setToZero = () => setCounter(0);

    return (
        <div>
            <Display counter={counter} />
            <Button onClick={increaseByOne} text={'plus'} />
            <Button onClick={setToZero} text={'reset'} />
            <Button onClick={decreaseByOne} text={'minus'} />
        </div>
    )
}

export default App