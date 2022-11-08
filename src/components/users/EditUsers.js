import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

const EditUsers = () => {
    let history =useHistory();
    const {id} = useParams();

    const[user,setUser]=useState({
        "name":"",
        "username":"",
        "email":"",
        "phone":""
    })
    const {name, username,email,phone} = user;
    

    const onInputChange = (e) =>{
        console.log(e.target.value);
        setUser({...user,[e.target.name]:e.target.value});
    }
    
    const onSubmit = async (e) => {
      e.preventDefault();
      await Axios.put(`http://localhost:3003/users/${id}` , user)   
      history.push("/")
    }
   useEffect(() => {
      loadUsers();
   }, []);

    const loadUsers = async () =>{
        // const result = await Axios.get("http://localhost:3003/users/" + id);
        
         const result = await Axios.get(`http://localhost:3003/users/${id}`);
         setUser(result.data);
         console.log(result);
    }

  return (
    <div className="container">
      <div className="w-80 m-20 shadow p-10">
        <h2 className="text-center m-4">Edit User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group m-5">
            <input 
              type="text"
              className="form-control form-control-lg "
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={ e => onInputChange(e)}
              
            />
          </div>
          <div className="form-group m-5">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={ e => onInputChange(e)}
            />
          </div>
          <div className="form-group m-5">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={ e => onInputChange(e)}
            />
          </div>
          <div className="form-group m-5">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={ e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block" >Update User</button>
        </form>
      </div>
    </div>
  );
}

export default EditUsers