import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            best_data: [],
            error: null,
            isLoaded: false
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('http://127.0.0.1:8000/api/recipes')
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
            fetch('http://127.0.0.1:8000/api/recipes/best')
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    best_data: result
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
        const { data, best_data } = this.state;
        console.log(best_data);

        return (
            <div>
                
                <Navbar/>
                {/* HEAD TITLE */}
                <div className='container-fluid text-center'>
                    <div className='col'>
                        <h2 style={{color: 'white'}}>Cook</h2>
                    </div>
                    <div className='col'>
                        <h2 style={{color: 'white'}}>with</h2>
                    </div>
                    <div className='col'>
                        <h1 style={{color: 'white'}}>MANGKIR</h1>
                    </div>
                </div>

                {/* BEST OF US */}
                <div className={`container text-center ${styles.bannerImgRounded}`}>
                <h3 style={{
                    color: 'white',
                    fontStyle: 'italic',
                    padding: '20px'
                }}>Best of Us</h3>
                </div><br/>

                {/* BEST OF US CARDS */}
                <div className='container-fluid'>
                    <div className='row text-center'>
                        <div className='col-md-4'>
                        <h5 style={{color: "white"}}>{best_data[0]?.judul}</h5>
                        <Link to={`/recipe/${best_data[0]?.recipeID}`} className='card' style={{
                                        width: '24rem',
                                        textDecoration: 'none',
                                        color: 'black'
                                    }}>
                            <img src={`http://127.0.0.1:8000/foto/${best_data[0]?.foto}`} alt="" className={`img-thumbnail ${styles.imgThumbCropBig}`}/>
                        </Link>
                        </div>
                        <div className='col-md-4'>
                            <h5 style={{color: "white"}}>{best_data[1]?.judul}</h5>
                            <Link to={`/recipe/${best_data[1]?.recipeID}`} className='card' style={{
                                        width: '24rem',
                                        textDecoration: 'none',
                                        color: 'black'
                                    }}>
                            <img src={`http://127.0.0.1:8000/foto/${best_data[1]?.foto}`} alt="" className={`img-thumbnail ${styles.imgThumbCropBig}`}/>
                            </Link>
                        </div>
                        <div className='col-md-4'>
                            <h5 style={{color: "white"}}>{best_data[2]?.judul}</h5>
                            <Link to={`/recipe/${best_data[2]?.recipeID}`} className='card' style={{
                                        width: '24rem',
                                        textDecoration: 'none',
                                        color: 'black'
                                    }}>
                            <img src={`http://127.0.0.1:8000/foto/${best_data[2]?.foto}`} alt="" className={`img-thumbnail ${styles.imgThumbCropBig}`}/>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* OTHERS FOR YOU */}
                <div className='container text-center'>
                    <h3 style={{
                        color: 'white',
                        padding: '20px'
                    }}>Other for You</h3>
                </div>

                {/* TODO: masih belum muncul, try searching foreach loop array jsx react */}
                <div className='container-fluid'>
                    <div className='row d-flex justify-content-center'>
                        {data?.map((recipe, index) => {
                            return (
                                <div className='col-md-4 center-block'>
                                    <Link to={`/recipe/${recipe.recipeID}`} className='card' style={{
                                        width: '18rem',
                                        textDecoration: 'none',
                                        color: 'black'
                                    }}>
                                        <img src={`http://127.0.0.1:8000/foto/${recipe.foto}`} alt={recipe.name} className={`card-img-top ${styles.imgThumbCrop}`}/>
                                        <div className='card-body'>
                                            <p className='card-text' style={{
                                                padding: '10px'
                                            }}>{recipe.durasi_menit} minutes</p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Extras (Input dan Leftover) */}
                <div className='row text-center' style={{
                    marginTop: '50px',
                }}>
                    <div className='col-md-6'>
                        <h2 style={{color: 'white'}}>Make Your Own Recipe</h2>
                        <div className={`container text-center ${styles.bannerImgRoundedSmall}`}>
                            <Link to='/input'>
                                <h1 style={{color: 'white'}}>Click here</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <h2 style={{color: 'white'}}>Leftovers</h2>
                        <div className={`container text-center ${styles.bannerImgRoundedSmall}`}>
                            <Link to='/#'>
                                <h1 style={{color: 'white'}}>Click here</h1>
                            </Link>
                        </div>
                    </div>
                </div>
                <br/>

        </div>
        );
    }
}