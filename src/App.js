import React from 'react';

const Hello = (props) => {
    const name = props.name;
    const age = props.age;

    const bornYear = () => new Date().getFullYear() - props.age;

  return (
      <div>
        <p>
          Hello {props.name}, you are {props.age} years old
        </p>
          <p>You were thus probably born in {bornYear()}</p>
      </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
      <div>
        <h1>Greetings</h1>
        <Hello name="Maya" age={26 + 10} />
        <Hello name={name} age={age} />
      </div>
  )
}

export default App;