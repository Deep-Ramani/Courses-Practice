import React from 'react';
import './App.css';
import { useSelector , useDispatch } from "react-redux";
import { incNumber } from './actions/action';
import { decNumber } from './actions/action';


function App() {

  const myState = useSelector((state)=> state.ChangeNumber)
  const dispatch = useDispatch();
  return (
  <div>
    <h1>Welcome to Redux</h1>
      <div className="IncDec">
        <button type="submit" className="IncDecButton" onClick={()=>dispatch(decNumber())}> - </button>
        <input type="text" value={myState}></input>
        <button type="submit" className="IncDecButton" onClick={()=>dispatch(incNumber(5))}> + </button>
      </div>
  </div>
  );
}

export default App;
