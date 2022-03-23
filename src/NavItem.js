import React from "react";
import { useNavigate } from "react-router-dom";
import "./NavItem.css";
function NavItem({ title,link }) {

    const navigate = useNavigate()
    const redirect =()=>{

         navigate(link);

       
    }
  return (
    <div onClick={redirect} className="navItem">
    
      <h4 className="navItem-title"> {title}</h4>{" "}
    </div>
  );
}

export default NavItem;
