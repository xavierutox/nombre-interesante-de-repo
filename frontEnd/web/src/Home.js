import * as React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import {useEffect, useState} from 'react';

export default function Entrypoint() {
    const [user, setUser] = useState(null);
    const [loged, setLoged] = useState(false);
  
    useEffect(() => {
      if (sessionStorage.getItem("user")){ // Maybe you could create a view that sets the user in the sessionStorage O:
        setUser(sessionStorage.getItem("user"));
        setLoged(true); 
      }
    }, [user, loged]);
  
return (
    <>
    <ResponsiveAppBar/>
    {loged?
     <div>Logged in, username: {user}</div>
      : 
      <div>Not logged in alksjdas</div>}
    </>
)}