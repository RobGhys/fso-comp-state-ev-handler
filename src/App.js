import React from 'react';

const Hello = ({name, age}) => {

    const bornYear = () => new Date().getFullYear() - age;

  return (
      <div>
        <p>
          Hello {name}, you are {age} years old
        </p>
          <p>You were thus probably born in {bornYear()}</p>
      </div>
  )
}

const App = (props) => {
  const {counter} = props;
  const name = 'Peter';
  const age = 10;

  return (
      <div>
          <h1>Greetings</h1>
          <Hello name="Maya" age={26 + 10} />
          <Hello name={name} age={age} />
          <h1>Counter Stuff</h1>
          <p>{counter}</p>
      </div>
  )
}

export default App;