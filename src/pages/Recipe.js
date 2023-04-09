import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from '../styles/Recipe.module.css';
import ReactPlayer from 'react-player';
import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';

export class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            stars: {
                size: 30,
                count: 5,
                color: "black",
                activeColor: "yellow",
                a11y: true,
            },
            dataRate: 0,
            desc: '',
            loggedInEmail: '',
            id: 0,
        };

        this.handleRatingChange = this.handleRatingChange.bind(this);
    }

    handleRatingChange(newRate){
        this.setState({dataRate: newRate});
    }
    handleDescChange = (event) => {
        this.setState({ desc: event.target.value });
      };

    componentDidMount = async(event) => {
        const id = parseInt(window.location.pathname.slice(-1));
        const response = await fetch(`http://127.0.0.1:8000/api/recipe/${id}`,{
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => this.setState({ data: data }));

        const accessToken = localStorage.getItem('access_token');
        fetch('/api/user', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log(data); // the user data
            })
            .catch(error => {
                console.log(error);
            });
    }
    
    render() {
        const id = parseInt(window.location.pathname.slice(-1));
        const { data, dataRate, desc, loggedInEmail } = this.state;
        const author = data.author;
        const dataRecipe = data.data_recipe;
        const dataSteps = data.data_steps;
        const dataIngredients = data.data_ingredients;
        const dataTools = data.data_tools;

        const avgRating = async(event) => {
            event.preventDefault();
            console.log(this.state.dataRate);
            const response = await fetch(`http://127.0.0.1:8000/api/recipe/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: localStorage.getItem('loggedInEmail'),
                    rating: this.state.dataRate,
                    deskripsi: this.state.desc,
                })
            });

            const res = await response.json();
            console.log(res);
        }

        const addFavorite = async(event) => {
            this.setState({id: parseInt(window.location.pathname.slice(-1))});
            // loggedInEmail = localStorage.getItem('loggedInEmail')
            this.setState({loggedInEmail: localStorage.getItem('loggedInEmail')});
            const tempRecipe = new Map(Object.entries(dataRecipe));
            console.log(loggedInEmail);
            event.preventDefault();
            const response = await fetch(`http://127.0.0.1:8000/api/recipes/favorite`, {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify({
                    id: this.state.id,
                    recipeID: tempRecipe.get('recipeID'),
                    email: localStorage.getItem('loggedInEmail')
                })
            });

            const status = response.status;
            const res = await response.json();
            console.log(status, res);
        }

        const isLoggedin = localStorage.getItem('access_token') !== "null";

        return (
            <div>
                
                <Navbar/>
                {/* Video Holder */}
                <div className='container-fluid text-center'>
                    <div className='col d-flex justify-content-center'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=NcXzpCqKdUA&ab_channel=J.KenjiL%C3%B3pez-Alt'/>
                    </div>
                </div>

                <div className='row' style={{
                    marginTop: '10px'
                }}>
                    <div className='col-md-7 text-end'>
                        <h2 style={{color: 'white'}}>{dataRecipe?.judul}</h2>
                    </div>
                    <div className='col-md-5'>
                        <button className='btn' onClick={addFavorite}>
                            <img src="/res/navbar/favorite.svg" alt="" style={{
                            width: '30px',
                            height: '30px'
                        }}/>
                        </button>
                    </div>
                </div>

                <div className='row text-center'>
                    <p style={{color: 'white'}}>{dataRecipe?.durasi_menit} minute preparation</p>
                </div>
    
                {/* Recipe Holder */}
                <div className='row' style={{
                    marginLeft: '50px',
                    marginRight: '50px'
                }}>
                    <div className='col-md-6'>
                        <h5 style={{color: 'white'}}>Step-by-step:</h5>
                        <ol>
                            {dataSteps?.map((res) => {
                                return (
                                    <li style={{color: 'white'}}>{res.deskripsi}</li>
                                );
                            })}
                        </ol>
                    </div>
    
                    <div className='col-md-2'>
                        <h5 style={{color: 'white'}}>Ingredients:</h5>
                        <ul>
                            {dataIngredients?.map((res) => {
                                return (
                                    <li style={{color: 'white'}}>{res.quantity} {res.unit} {res.ingredient_name}</li>
                                );
                            })}
                        </ul>
                    </div>

                    <div className='col-md-4'>
                        <h5 style={{color: 'white'}}>Tools:</h5>
                        <ul>
                            {dataTools?.map((res) => {
                                return (
                                    <li style={{color: 'white'}}>{res.nama_alat}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
    
                {/* Rating */}
                {isLoggedin?
                <div className='row'>
                    <div className='col-md-2'></div>
                    <div className={`row col-md-8 ${styles.roundedCard}`}>
                        <div className='col-md-2 text-center'>
                            <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className='rounded-circle' style={{
                                width: '100px'
                            }} />
                        </div>
                        <div className='col-md-10'>
                            <h3>{author?.name}</h3>
                            <ReactStars {...this.state.stars} onChange={this.handleRatingChange}/>
                            <textarea name="rating" id="recipe-rating" cols="15" rows="10" className='form-control' onChange={this.handleDescChange} style={{
                                marginBottom: '10px'
                            }}></textarea>
                            <button className='btn btn-success' onClick={avgRating}>Submit</button>
                        </div>
                    </div>
                    <div className='col-md-2'></div>
                </div>
                :
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className={`col-md-6 ${styles.roundedCard}`}>
                        <h2>Sign up to join the conversation</h2>
                        <p>Add your feedback to the following recipes by logging in or registering.</p>
                        <Link to="/login">
                            <button className='btn btn-success'>Sign up or log in</button>
                        </Link>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                }
            </div>
        );
    }
}