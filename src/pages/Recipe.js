import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactPlayer from 'react-player';
import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';

export function Recipe() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
    (async() => {
        const response = await fetch('https://raw.githubusercontent.com/kodecocodes/recipes/master/Recipes.json');
        const parsed = await response.json();
        setData(parsed);
    })();
    }, []);

    console.log(data);

    const example = data[0];

    return (
        <div>
            
            {/* Video Holder */}
            <div className='container-fluid text-center'>
                <h2 style={{
                    fontStyle: 'italic'
                }}>Recipe Title</h2>
                <div className='col d-flex justify-content-center'>
                    <ReactPlayer url='https://www.youtube.com/watch?v=NcXzpCqKdUA&ab_channel=J.KenjiL%C3%B3pez-Alt'/>
                </div>
            </div>

            {/* Recipe Holder */}
            <div className='row'>
                <div className='col-md-6'>
                    <h5>Step-by-step:</h5>
                    <ul>
                        {example.steps.map((res) => {
                            return (
                                <li>{res}</li>
                            );
                        })}
                    </ul>
                </div>

                <div className='col-md-6'>
                    <h5>Ingredients:</h5>
                    <ul>
                        {example.ingredients.map((res) => {
                            return (
                                <li>{res.quantity} {res.name}</li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Rating */}
            <div className='d-flex justify-content-center'>
                <Rating />
            </div>

            <div className='row'>
                <div className='col-md-2 text-end'>
                    <img src="https://res.cloudinary.com/demo/image/facebook/65646572251.jpg" alt="" className='img-thumbnail' style={{
                        width: '100px'
                    }} />
                </div>
                <div className='col-md-10' style={{
                    paddingRight: '40px'
                }}>
                    <textarea name="rating" id="recipe-rating" cols="30" rows="10" className='form-control'></textarea>
                </div>
            </div>

        </div>
    );
}