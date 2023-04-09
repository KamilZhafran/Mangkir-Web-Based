import '../../App.css';
import styles from '../../styles/navbar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <div>
            <nav className='navbar navbar-expand-lg navbar-light shadow-5-strong'>
            <div className='container-fluid'>
                <Link to="/" className='navbar-brand' style={{
                    color: 'white'
                    }}>Mangkir</Link>
                <div className='collapse navbar-collapse'>
                <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                    <form action="search" className={`d-flex ${styles.roundedInput}`} role={'searchbox'}>
                    <input type="search" placeholder='Input Recipe...' aria-label='Search' style={{
                        background: 'transparent',
                        border: 'none'
                    }}/>
                    <button className='btn' type='submit' style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                    }}>
                        <img src="/res/navbar/search.svg" alt="" style={{
                        height: '40px',
                        width: '40px'
                        }} />
                    </button>
                    </form>
                    <li className='nav-item'>
                    <Link to='/favorite' className='nav-link' style={{
                    color: 'white'
                    }}>
                    <img src="/res/navbar/favorite.svg" alt="" style={{
                        height: '40px',
                        width: '40px'
                    }} />
                    </Link>
                    </li>
                    {/* FILTER */}
                    <li className='nav-item'>
                    <Link to='/' className='nav-link' style={{
                    color: 'white'
                    }}>
                    <img src="/res/navbar/filter.svg" alt="" style={{
                        height: '40px',
                        width: '40px'
                    }} />
                    </Link>
                    </li>
                    <li className='nav-item'>
                    <Link to='/profile' className='nav-link' style={{
                    color: 'white'
                    }}>
                    <img src="/res/navbar/profile.svg" alt="" style={{
                        height: '40px',
                        width: '40px'
                    }} />
                    </Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
}