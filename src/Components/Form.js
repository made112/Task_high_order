import React, { useState,useEffect } from "react";

//  import axios from "axios";
import HOC  from "./WithLocalStorage";


const Form = ({saving}) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  // const [token, SetToken] = useState()
  const handleSubmit = e => {
    e.preventDefault();
    saving("username",username)
    saving("password",password)

  }
  const ChangeValue =e =>{
    if(e.target.name=="username") {
      setUsername(e.target.value);

    }else if(e.target.name=="password"){
      
      setPassword(e.target.value)
    }
    
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        style={{width:"200px",height:"60px"}}
        name="username"
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={ChangeValue}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
        style={{width:"200px",height:"60px"}}
          name="password"
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={ChangeValue}
        />
      </div>
      <button  type="submit">Login</button>
    </form>
  );
};

export default  HOC(Form);