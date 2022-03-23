import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {addUsers} from './features/UserSlice'
import "./User.css"
function User() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const addUser = () =>{
      dispatch(addUsers({
          name:name,
          email:email
      }))

      navigate('/userlist')
    }
  return (
    <div className='users'>
        
        <h1>Add User</h1>
        <div className='users-input'> 
            <input onChange={(e)=> setName(e.target.value)} type='text' placeholder="Name"/>
            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Email"/>
        </div>

        <button onClick={addUser} className='users-button'>Add</button>
    </div>
  )
}

export default User