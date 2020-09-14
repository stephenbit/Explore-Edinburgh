import React from 'react';
import './App.css';
import BlogEntry from './BlogEntry.js';
import Navbar from './Navbar.js'

function App() {
  return (
    <>
      <Navbar Navbar={Navbar}/>
      <BlogEntry BlogEntry={BlogEntry} />
    </>
  )
}

export default App;
