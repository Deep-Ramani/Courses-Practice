import React, { useState } from 'react'

export const Asyncawait = () => {
 const [data, setData]=useState()
    const apiGet = () => {
        fetch('https://reqres.in/api/users?page=2')
        .then((response)=>{
          console.log(response.status);
          return response.json()
        })
        .then((json)=>{
          console.log(json);
          setData(json)
        })
    }
  return (
<>
    <button onClick={apiGet}> Fetch API</button>
    <pre>{JSON.stringify(data,null,2)}</pre>
</>
  )
}
