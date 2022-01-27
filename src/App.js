import React, { useState } from 'react'

const App = () => {
    // Add state to the component and renders it initialized with the value of zero
    // The counter variable is assigned the initial value of state which is zero
    // The variable setCounter is assigned to a function that will be used to modify the state
    const [ counter, setCounter ] = useState(0);

    setTimeout(
        // React re-renders the component which means that the function body of the component function gets re-executed
        () => setCounter(counter + 1),
        1000
    )

    return (
        <div>{counter}</div>
    )
}

export default App