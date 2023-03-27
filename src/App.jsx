import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';

function App() {
  const [data, dataset] = useState({});

  useEffect(() => {
    (async() => {
      const response = await fetch('https://raw.githubusercontent.com/kodecocodes/recipes/master/Recipes.json');
      const parsed = await response.json();
      dataset(parsed);
    })();
  }, []);

  // JSON data is available in **data** constant

  return (
    <div>

      {/* NAVBAR SNIPPET */}
      <div>
        <nav className='navbar navbar-expand-lg navbar-light shadow-5-strong'>
          <div className='container-fluid'>
            <a href="#" className='navbar-brand'>Mangkir</a>
            <div className='collapse navbar-collapse'>
              <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                <form action="search" className='d-flex' role={'searchbox'}>
                  <input type="search" className='form-control me-2' placeholder='Input Recipe...' aria-label='Search'/>
                  <button className='btn btn-success' type='submit'>Search</button>
                </form>
                <li className='nav-item'>
                  <a href="#" className='nav-link'>Favorites</a>
                </li>
                <li className='nav-item'>
                  <a href="#" className='nav-link'>Upload</a>
                </li>
                <li className='nav-item'>
                  <a href="#" className='nav-link'>Profile</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      {/* HEAD TITLE */}
      <div className='container-fluid text-center'>
        <div className='col'>
          <h2>Cook</h2>
        </div>
        <div className='col'>
          <h2>with</h2>
        </div>
        <div className='col'>
          <h1>MANGKIR</h1>
        </div>
      </div>

      {/* BEST OF US */}
      <div className='container rounded text-center' style={{backgroundColor: 'gray'}}>
        <h3 style={{
          color: 'white',
          fontStyle: 'italic',
          padding: '20px'
        }}>Best of Us</h3>
      </div>

      {/* BEST OF US CARDS */}
      {/* TODO: continue getting data to best of us card */}
      <div className='container-fluid'>
        <div className='row text-center'>
          <div className='col-md-4'>

          </div>
          <div className='col-md-4'>

          </div>
          <div className='col-md-4'>

          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
