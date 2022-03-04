import React from 'react'
// import '../App.css'

function DisplayDate() {

    let today =new Date();
    let curDate = today.getHours()
    let greeting = '';

    if (curDate >=1 && curDate <12){
        greeting = 'Good Morning'
    }else if(curDate>=12 && curDate < 19){
        greeting=  'Good Afternoon'
    }else{
        greeting=  'Good night';
    }
  return (
    <h1>Hello, {greeting}</h1>
  )
}

export default DisplayDate