import React, {useState} from "react";
import './LookUpForm.scss'
import axios from "axios";

export default function LookUpForm() {
  const [name, setName] = useState(null);
  const [id, setId] = useState(null)
  const [department, setDepartment] = useState(null);
  const [emplyoyed, setEmployed] = useState(null)
  const [email, setEmail] = useState (null)

 async function onSubmit() {
  await axios.get('http://localhost:3000/users', {name, email, id, department, emplyoyed})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  return(

    <div className="signup_wrapper">
        <div className='boxS'>
        <h1>Employee Database</h1>
          <label>
            <h4>Name:</h4>
            <input className='forms'  type="text" name="name" onChange={(ev) => setName(ev.target.value)}/>
          </label>
          <label>
            <h4>Email:</h4>
            <input className='forms' type="text" name="email" onChange={(ev) => setEmail(ev.target.value)}/>
          </label>
          <label>
            <h4>ID:</h4>
            <input className='forms' type="text" name="id" onChange={(ev) => setId(ev.target.value)}/>
          </label>
          <label>
            <h4>Department:</h4>
            <input className='forms' type="text" name="department" onChange={(ev) => setDepartment(ev.target.value)}/>
          </label>
          <label>
            <h4>Employment:</h4>
            <input className='forms' type="text" name="employment" onChange={(ev) => setEmployed(ev.target.value)}/>
          </label>
          <div>
            <button className='user_btn' type="submit" onClick={onSubmit}>Register</button>
          </div>
      </div> 
    </div>
  );
}