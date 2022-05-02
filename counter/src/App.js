
import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import { IncNum , DecNum } from './action/action'
import { useState } from 'react';

function App() {
  const myState = useSelector((state)=> state.ChangeNumber)
  const Dispatch = useDispatch();

  const [number, setNumber] = useState(0)
  
  // const person = {
  //   name:"Deep",
  //   age:21
  // }

  // const [state,setState]=useState(person)
  

  // if(state.name ==="Deep"){
  //   setState({...state,name:"Jay",age:22})
  // }
 
  // console.log(state);

  // const decrementCount = () =>{
  //   setNumber (number - 1);
  // }
  // const incrementCounter = () =>{
  //   setNumber (number + 1);
  // }
  return (

    
    <div className="App">
      <button type="submit" onClick={()=>Dispatch(DecNum())}> - </button>
      <input type="text"  value={myState}></input>
      <button type="submit" onClick={()=>Dispatch(IncNum())}> + </button>


      <br/>

      <button onClick={()=>setNumber(number-1)}>-</button>
      <span>{number}</span>
      <button onClick={()=>setNumber(number+1)}>+</button>
    </div>

    
  );



  
}

export default App;
