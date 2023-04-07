import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { InputRecipe } from './pages/InputRecipe';
import { Favorite } from './pages/Favorite';
import { Recipe } from './pages/Recipe';
import { LoginRegister } from './pages/LoginRegister';

function App() {
  return (
    <>
      {/* NAVBAR SNIPPET */}
      <div>
        <nav className='navbar navbar-expand-lg navbar-light shadow-5-strong'>
          <div className='container-fluid'>
            <Link to="/" className='navbar-brand'>Mangkir</Link>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <form action="search" className='d-flex' role={'searchbox'}>
                  <input type="search" className='form-control me-2' placeholder='Input Recipe...' aria-label='Search'/>
                  <button className='btn btn-success' type='submit'>Search</button>
                </form>
                <li className='nav-item'>
                  <Link to='/favorite' className='nav-link'>Favorites</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/input' className='nav-link'>Upload</Link>
                </li>
                <li className='nav-item'>
                  <Link to='/login-register' className='nav-link'>Profile</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <Routes>
        <Route path='/login-register' element={<LoginRegister/>} />
        <Route path="/" element={<Home />} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/recipe' element={<Recipe/>} />
        <Route path='/input' element={<InputRecipe/>} />
      </Routes>
    </>
  );
}

export default App;
