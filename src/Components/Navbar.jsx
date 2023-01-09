import React from 'react';
import {  NavLink } from "react-router-dom";

const Navbar= () =>{
    const navlink ={
        textDecoration:'none',
        color:'white'
    }
  return <>

    <div style={{display:'flex', backgroundColor:'black', color:'white'}}>
        <div style={{marginLeft:'20px'}}>
    <h2>Swapnil Chavan</h2>
    </div>

    <div style={{display:'flex', marginLeft:"40%", gap:'70px'}}>


    <NavLink style={(navlink)} key={"/home"}
          to={"/home"}
          end>
   <h3>Home</h3>
    </NavLink>

    <NavLink style={(navlink)} key={"/about"}
          to={"/about"}
          end>
   <h3>About</h3>
    </NavLink>

    <NavLink style={(navlink)}  key={"/project"}
          to={"/project"}
          end>
   <h3>Projects</h3>
    </NavLink>

  <NavLink style={(navlink)}  key={"/contacts"}
          to={"/contacts"}
          end>
   <h3>Contacts</h3>
    </NavLink>
   
    <NavLink style={(navlink)}  key={"/resume"}
          to={"/resume"}
          end>
   <h3>Resume</h3> 
    </NavLink>
  </div>
  </div>
  </>
}
export default Navbar;