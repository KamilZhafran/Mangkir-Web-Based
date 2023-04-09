import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Favorite.module.css';

export class Favorite extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            error: null,
            isLoaded: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        const loggedInEmail = localStorage.getItem('loggedInEmail');
        fetch(`http://127.0.0.1:8000/api/recipes/favorite?email=${loggedInEmail}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    data: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            })
            // .then(data => this.setState({ data: data }));
    }

    render() {
        const { data } = this.state;

        // console.log(data);

        return (
            <div>
                {/* Your Favorite */}
                <div className='row'>
                    <div className='col-md-6 text-end'>
                        <h1 style={{
                            fontStyle: 'italic',
                            color: 'white'
                        }}>YOUR</h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6'>
                        <h1 style={{
                            fontStyle: 'italic',
                            color: 'white'
                        }}>Favorites</h1>
                    </div>
                </div>

                {/* Favorite Cards */}
                <div className='container-fluid'>
                    <div className='row d-flex justify-content-center'>
                        {data.map((recipe, index) => {
                            return (
                                <div className='col-md-4'>
                                    <Link to={`/recipe/${index}`} className='card' style={{
                                        maxWidth: '20rem',
                                        marginTop: '10px',
                                        marginBottom: '10px',
                                        textDecoration: 'none',
                                        color: 'black'
                                    }}>
                                        <img src={`http://127.0.0.1:8000/foto/${recipe.foto}`} alt="" className='card-img-top img-thumb-crop'/>
                                        <div className='card-body'>
                                            <p className='card-text' style={{
                                                padding: '5px'
                                            }}> {recipe.durasi_menit} Minutes</p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
}