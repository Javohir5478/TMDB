import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import Movies from './pages/Movies'
import SingleMovie from './pages/SingleMovie'


function App() {

  return (
    <Fragment>
  <Routes>
    <Route>

      <Route path='/' element={<Layout/>}>

 
          <Route path='' element={<HomePage/>}/>
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<SingleMovie/>} />


      </Route>

    </Route>
  </Routes>
      
    
    </Fragment>
  )
}

export default App;
