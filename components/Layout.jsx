import React from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import Footer from './Footer';

// this file will be called from _app.js

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Head>
        <title>Matt's Store</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="main-container">
        {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
