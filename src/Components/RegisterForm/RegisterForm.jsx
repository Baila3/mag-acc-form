import React, {useState} from "react";
import './RegisterForm.scss'
import axios from "axios";
import swal from 'sweetalert';

export default function RegisterForm() {
  const [name, setName] = useState(null);
  const [department, setDepartment] = useState(null);
  const [employed, setEmployed] = useState(null)
  const [email, setEmail] = useState (null)
  const [selectedFile, setSelectedFile] = useState(null);

 async function onSubmit(e) {
  e.preventDefault()
  await axios.post('http://localhost:3000/users', {name, email, department, employed, selectedFile})
      .then(res => {
        console.log(selectedFile)
        console.log(res);
        console.log(res.data);
      })
      swal("Employee Sucessfully Registered")
      setTimeout(() => {
        window.location.reload(false);
      }, 120000000);
  }

  return(

    <div className="signup_wrapper">
        <div className='boxS'>
        <h1>Register Employee</h1>
          <label>
            <h3 className="height1">Name:</h3>
            <input className='forms'  type="text" name="name" onChange={(ev) => setName(ev.target.value)}/>
          </label>
          <label>
            <h3 className="height1">Email:</h3>
            <input className='forms' type="text" name="email" onChange={(ev) => setEmail(ev.target.value)}/>
          </label>
          <label>
            <h3 className="height1">Department:</h3>
            <input className='forms' type="text" name="department" onChange={(ev) => setDepartment(ev.target.value)}/>
          </label>
          <label>
            <h3 className="height1">Currently Employed:</h3>
            <input className='forms' type="text" name="employment" onChange={(ev) => setEmployed(ev.target.value)} placeholder="Yes/No"/>
          </label>
          <label>
            <h3 className="height1">Upload Avatar:</h3>
            <input  className="file" type="file" onChange={(e) => setSelectedFile(e.target.files[0].name)} />
          </label>
          <div>
            <button className='user_btn' type="submit" onClick={onSubmit}><b>Register</b></button>
          </div>
      </div> 
    </div>
  );
}