import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactPlayer from 'react-player';
import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';

export class Recipe extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/kodecocodes/recipes/master/Recipes.json')
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }

    render() {
        const id = parseInt(window.location.pathname.slice(-1));
        const { data } = this.state;

        console.log(id);

        const currData = data[id]

        return (
            <div>
                
                {/* Video Holder */}
                <div className='container-fluid text-center'>
                    <div className='col d-flex justify-content-center'>
                        <ReactPlayer url='https://www.youtube.com/watch?v=NcXzpCqKdUA&ab_channel=J.KenjiL%C3%B3pez-Alt'/>
                    </div>
                </div>

                <div className='row text-center'>
                    <h2>{currData?.name}</h2>
                </div>

                <div className='row text-center'>
                    <p>{currData?.timers.reduce(function (x, y) {
                            return x + y;
                        }, 0)} minute preparation</p>
                </div>
    
                {/* Recipe Holder */}
                <div className='row'>
                    <div className='col-md-6'>
                        <h5>Step-by-step:</h5>
                        <ul>
                            {currData?.steps.map((res) => {
                                return (
                                    <li>{res}</li>
                                );
                            })}
                        </ul>
                    </div>
    
                    <div className='col-md-6'>
                        <h5>Ingredients:</h5>
                        <ul>
                            {currData?.ingredients.map((res) => {
                                return (
                                    <li>{res.quantity} {res.name}</li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
    
                {/* Rating */}
                <div className='row'>
                    <div className='col-md-3 text-end'>
                        <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className='rounded-circle' style={{
                            width: '100px'
                        }} />
                    </div>
                    <div className='col-md-9'>
                        <p>name holder</p>
                        <Rating />
                    </div>
                </div>
                <div className='row' style={{
                    padding: '40px'
                }}>
                    <textarea name="rating" id="recipe-rating" cols="30" rows="10" className='form-control'></textarea>
                </div>
    
            </div>
        );
    }
}