import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/Home';
import { InputRecipe } from './pages/InputRecipe';
import { Favorite } from './pages/Favorite';
import { Recipe } from './pages/Recipe';
import { Profile } from './pages/Profile';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Search } from './pages/Search';

function App() {
  console.log(`${localStorage.getItem('access_token')} ${localStorage.getItem('loggedInEmail')}`);
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>} />
        <Route path="/" element={<Home />} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path="/recipe/:id" element={<Recipe/>} />
        <Route path='/input' element={<InputRecipe/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/search' element={<Search/>}/>
      </Routes>
    </>
  );
}

export default App;
