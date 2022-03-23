import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/UserSlice";
import "./UserList.css";
function UserList() {
  const user = useSelector(selectUser);
  console.log(user); //pull the data
  return (
    <div>
    
      {user?.map((item, index) => (
        <div key={index}>
          <h1> Name :{item.name}</h1>
          <h1> Email:{item.email}</h1>
          
        </div>
      ))}
    </div>
  );
}

export default UserList;
