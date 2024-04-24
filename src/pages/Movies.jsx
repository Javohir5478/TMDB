import React, { useEffect, useState } from 'react'
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/context';



import "./Home.scss";




function Movies () {

  const [Search,setSearch] = useState('');

  

  const {data} = useGlobalContext();
  console.log(data);

  return (
    <>
  <div className='search'>

    <Form>
      <InputGroup className='my-3' >
           <FormControl 
           onChange={(e) => setSearch(e.target.value) }
           placeholder='Search Movies with title'
           />
      </InputGroup>
    </Form>

  </div>
    
    <div className='home_container'>
      
    

      
      {data.filter((item) => {
        return Search.toLowerCase() === '' ? item : item.original_title.toLowerCase().includes(Search)
      })
      .map((item) => {
        return  <div className='card_home' key={item.id}>

                <img src={`http://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" />
                
            <Link to={`/movies/${item.id}`}> <h3>{item.original_title}</h3></Link>   
                <h5>{item.release_date}</h5>

        </div>
      })}
    </div>
    </>
  )
}

export default Movies ;