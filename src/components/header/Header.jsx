import React from 'react'
import { Link } from 'react-router-dom';

import "./Header.scss";

const Header = () => {
  return (
    <div className='header_container'>

      <h1>Popular films</h1>
        {/* <div className="container_search">
          <form action="">
      <input type="text"  placeholder="Search..."/>
      </form> */}
       <div className="search"></div>
   </div>
    // </div>
  )
}

export default Header