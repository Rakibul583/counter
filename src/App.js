import React, {useState} from 'react';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
      </header>
    </div>
  );
}


function Counter(){
  const [count,setCount] = useState (10);
  const handleIncrease = () => setCount(count+1);
  const handledecrease = () => setCount(count-1);
  return(
    <div>
    <h1>Count:{count}</h1>
    <button onClick={handleIncrease} >Increase</button>
    <button onClick={handledecrease} >Decrease</button>
  </div>
  )
}
export default App;
