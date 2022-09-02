import './App.css';
import { useEffect, useState } from "react";
//import Card from "./components/Card"
//import Counter from "./Counter"
import Box from "./components/Box"

function App() {

// useEffect (() => {
//   console.log ("App")
// });

const [count,updateCount] = useState (0);//contador padre
// function boxClicked() {
//   console.log("boxClicked")
// }

function boxClicked(brother) {
  updateCount (count + 1);
  if (brother === 1) {
    updateCount1 (count1 + 1);
  } else {
    updateCount2 (count2 + 1);
  }
}

const [count1,updateCount1] = useState(0);
const [count2,updateCount2] = useState(0);

  return (
    <div className="App"> 
      <header className="App-header">
      {/* <Box id={1} boxClicked={boxClicked}/>
      <Box id={2} boxClicked={boxClicked}/> */}
        <Box id={1} brotherCount={count2} boxClicked={boxClicked}/>
        <Box id={2} brotherCount={count1} boxClicked={boxClicked}/>
        <br/>
        <p>Contador Padre: {count}</p> 
        {/* <Card/> */}
      </header>
    </div>
  );
}

export default App;