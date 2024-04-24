import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
// import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div>
        <Fragment>

           <menu>
              <Header/>
              <Outlet/>
              {/* <Footer/> */}
           </menu>

        </Fragment>
    </div>
  )
}

export default Layout