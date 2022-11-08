import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const ViewUsers = () => {

    const {id} = useParams();

    useEffect(() =>{
      loadUsers();
    },[]);

    const[user,setUser]=useState({
        "name":"",
        "username":"",
        "email":"",
        "phone":""
    });
    const loadUsers = async () =>{ 
         const res = await Axios.get(`http://localhost:3003/users/${id}`);
         setUser(res.data);
    }

  return (
    <div>
    
    <div className="container py-4">
    <h1>Users : {user.name}</h1>
    <Link className="btn btn-primary" to="/">
      back to Home
    </Link>
   
    <hr />
    <ul className="list-group w-50">
      <li className="list-group-item">user Id: {id}</li>
      <li className="list-group-item">name: {user.name}</li>
      <li className="list-group-item">user name: {user.username}</li>
      <li className="list-group-item">email: {user.email}</li>
      <li className="list-group-item">phone: {user.phone}</li>
    </ul>
  </div>
    </div>
  )
}

export default ViewUsers