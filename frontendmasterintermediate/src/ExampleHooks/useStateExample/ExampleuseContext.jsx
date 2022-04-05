import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const ExampleuseContext = () => {
                                                                                                            const [user, setUser] = useState("Deep Ramani");

  return (
    <div>
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}`}</h1>
      </UserContext.Provider>
      <Component2/>
    </div>
  );
};

function Component2() {
  return (
    <>
      <h1>Component2</h1>
      <Component3/>
    </>
  );
}

function Component3() {
  return(
    <>
    <h1>Component3</h1>
    <Component4/>
    </>
  )
}

function Component4() {
  return(
    <>
    <h1>Component4</h1>
    <Component5/>
    </>
  )
}

function Component5(){
  const user = useContext(UserContext)
  return(
    <>
    <h1>Component5</h1>
    <h1>{`Hello ${user}`}</h1>
    </>
  )
}