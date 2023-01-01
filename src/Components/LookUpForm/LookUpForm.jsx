import React, {useState, useEffect} from "react";
import './LookUpForm.scss'
import axios from "axios";


export default function LookUpForm() {
  const [name, setName] = useState(null);
  const [id, setId] = useState(null)
  const [department, setDepartment] = useState(null);
  const [employed, setEmployed] = useState(null)
  const [email, setEmail] = useState (null)
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/users')
     .then(res => setPosts(res.data))
     .catch(err => console.log(err));
  }, [])

   function filteredObj() {
      return posts.filter(item =>  item.name === name ||  item.email  === email || item.id === id || item.department  === department || item.employed == employed ); 
    }

  return(
    <div>
      <h1 className="empData">Employee Database</h1>
      <div className="Lookup_wrapper">
          <label>
            <h4 className="height">Name:</h4>
            <input className='forms'  type="text" name="name" onChange={(ev) => setName(ev.target.value)}/>
          </label>
          <label>
            <h4 className="height">Email:</h4>
            <input className='forms' type="text" name="email" onChange={(ev) => setEmail(ev.target.value)}/>
          </label>
          <label>
            <h4 className="height">ID:</h4>
            <input className='forms' type="text" name="id" onChange={(ev) => setId(Number(ev.target.value))}/>
          </label>
          <label>
            <h4 className="height">Department:</h4>
            <input className='forms' type="text" name="department" onChange={(ev) => setDepartment(ev.target.value)}/>
          </label>
          <label>
            <h4 className="height">Employed:</h4>
            <input className='forms' type="text" name="employment" onChange={(ev) => setEmployed(ev.target.value)}/>
          </label>
        </div>
        <section>
            {filteredObj().map(employee => {
              return (
                <li className="empBox" key={employee.id}>
                <h2>{employee.name }</h2>
                <p>Email: {employee.email}</p>
                <p>ID: {employee.id}</p>
                <p>Depatment: {employee.department}</p>
                <p>Employed: {employee.employed}</p>
                </li>
              )
            })}
        </section>
    </div>
  );
}