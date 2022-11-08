import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const[user,setUsers]=useState([]);

  useEffect(() =>{
   console.log("hello everyone");
   loadUsers();
  },[]);
   
  const loadUsers = async () =>{
    const result = await Axios.get("http://localhost:3003/users")
    console.log(result.data);
    setUsers(result.data);
  }
  
  const handleDelete = async (id) =>{
   await Axios.delete(`http://localhost:3003/users/${id}`);
   loadUsers();
  }

  return (
    <div className="container">
      <div className="py-4">
        <h1> Home</h1>

        <table className="table border shadow ">
  <thead className="table-dark">
    <tr>
      <th scope="col">Sr.No</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      user.map((user,index) => (
        <tr>
        <th scope="row">{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>
          <Link className="btn btn-primary mr-2" to={`/users/ViewUsers/${user.id}`}>View</Link>
          <Link className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</Link>
          <Link className="btn btn-danger mr-2" onClick={()=> handleDelete(user.id)}>Delete</Link>
        </td>
        </tr>
      ))
    }
  </tbody>
</table>
      </div>
    </div>
  );
};

export default Home;
