import React from 'react';

import Expenses from './components/Expenses/Expenses';


function App(){
  
  const expense =[
    {
      id:'e1',
      title:'Car Insurance1',
      amount:42.52,
      date : new Date(2022, 4, 4),
    },

    {
      id:'e2',
      title:'Car Insurance2',
      amount:42.52,
      date : new Date(2022, 3, 30),
    },

    {
      id:'e3',
      title:'Car Insurance3',
      amount:575.52,
      date : new Date(2022, 5, 4),
    },

    {
      id:'e4',
      title:'Car Insurance4',
      amount:688.52,
      date : new Date(2022, 7, 21),
    },

  ];

    // return React.createElement(
    //   'div',
    //   {},
    //   // React.createElement('h2', {}, "Hello"), 
    //   React.createElement(Expenses, {item: expense})
    // );


return(
  <div className='expenses'>
   <Expenses item={expense}/>
  </div>
  
);
}


export default App;