import React, { useState } from 'react';
import AuthAction from "./AuthAction";
import './App.css';
import AuthContext from "./AuthContext";
import AuthDisplay from "./AuthDisplay";

function App() {
  const [isAuth, setAuth] = useState();
  const AuthValue = { isAuth, setAuth };
  return (
      <AuthContext.Provider value={{ AuthValue }}>
        <AuthAction/>
        <AuthDisplay/>
      </AuthContext.Provider>
  );
}

export default App;
