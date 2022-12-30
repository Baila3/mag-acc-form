import React from "react";
import './Header.scss'
import { Link } from 'react-router-dom';


export default function Header() {

  return(
    <div className="nav">
      <img src="https://magnifyaccess.ca/gallery_gen/7b6ede3a97cd0ea9a9ab604c92d9efd1_832x313.0297029703.jpg" alt="" />
      <h2><Link className="links" to="/" >Submission Form</Link></h2>
      <h2><Link className="links" to="/DataLookUp" >Lookup Form</Link></h2>
    </div>
  )
}
