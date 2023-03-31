import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Home() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
    (async() => {
        const response = await fetch('https://raw.githubusercontent.com/kodecocodes/recipes/master/Recipes.json');
        const parsed = await response.json();
        setData(parsed);
    })();
    }, []);

    console.log(data);

    return (
        <div>
        
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
            {/* TODO: ini kenapa error-error terus ngambil datanya :D */}
            <div className='container-fluid'>
                <div className='row text-center'>
                    <div className='col-md-4'>
                        <h5>{data[0].name}</h5>
                        <img src={data[0].imageURL} alt="" className='img-thumbnail'/>
                    </div>
                    <div className='col-md-4'>
                        <h5>{data[1].name}</h5>
                        <img src={data[1].imageURL} alt="" className='img-thumbnail'/>
                    </div>
                    <div className='col-md-4'>
                        <h5>{data[4].name}</h5>
                        <img src={data[4].imageURL} alt="" className='img-thumbnail'/>
                    </div>
                </div>
            </div>

            {/* OTHERS FOR YOU */}
            <div className='container text-center'>
                <h3 style={{
                    color: 'black',
                    padding: '20px'
                }}>Other for You</h3>
            </div>

            {/* TODO: masih belum muncul, try searching foreach loop array jsx react */}
            <div className='container-fluid'>
                <div className='row row-cols-3'>
                    {data.map((recipe, index) => {
                        return (
                            <div className='col-md-4 center-block'>
                                {/* href to /recipe/id to view details ??? */}
                                <Link to='/recipe/:index' className='card' style={{
                                    width: '18rem',
                                    marginTop: '10px',
                                    marginBottom: '10px'
                                }}>
                                    <img src={recipe.imageURL} alt="" className='card-img-top'/>
                                    <div className='card-body'>
                                        <p className='card-text' style={{
                                            padding: '10px'
                                        }}>{recipe.timers.reduce(function (x, y) {
                                            return x + y;
                                        }, 0)} Minutes</p>
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