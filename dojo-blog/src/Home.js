import { useState } from 'react';

const Home = () => {
  // let name = 'mario';
  // useState Hook: makes a 'reactive' value (a value that can react to changes in the state) and returns a function you can use to change that value.
  // use 'Array Destructuring' to grab those 2 values we get from this hook.
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  // When we click the button, we invoke the setName function, which changes the state of 'name' to 'luigi' and re-render the parent component.
  const handleClick = () => {
    setName('luigi');
    setAge(30);
  };

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>
        Hi, my name is {name}, and I'm {age} years old.
      </p>
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};

export default Home;
