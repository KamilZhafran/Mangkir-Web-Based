import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from '../styles/Home.module.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://raw.githubusercontent.com/kodecocodes/recipes/master/Recipes.json')
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }

    render() {
        const { data } = this.state;
        console.log(data);

        return (
            <div>
        
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
                            <h5 style={{color: 'white'}}>{data[0]?.name}</h5>
                            <img src={data[0]?.imageURL} alt="" className={`img-thumbnail ${styles.imgThumbCropBig}`}/>
                        </div>
                        <div className='col-md-4'>
                            <h5 style={{color: 'white'}}>{data[1]?.name}</h5>
                            <img src={data[1]?.imageURL} alt="" className={`img-thumbnail ${styles.imgThumbCropBig}`}/>
                        </div>
                        <div className='col-md-4'>
                            <h5 style={{color: 'white'}}>{data[4]?.name}</h5>
                            <img src={data[4]?.imageURL} alt="" className={`img-thumbnail ${styles.imgThumbCropBig}`}/>
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
                                    {/* href to /recipe/id to view details ??? */}
                                    <Link to={`/recipe/${index}`} className='card' style={{
                                        width: '18rem',
                                        textDecoration: 'none',
                                        color: 'black'
                                    }}>
                                        <img src={recipe.imageURL} alt="" className={`card-img-top ${styles.imgThumbCrop}`}/>
                                        <div className='card-body'>
                                            <p className='card-text'>{recipe.timers.reduce(function (x, y) {
                                                return x + y;
                                            }, 0)} Minutes</p>
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