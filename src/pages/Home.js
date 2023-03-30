import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useState, useEffect } from 'react';

// function getMainData() {
//     const [data, dataset] = useState({});
  
//     useEffect(() => {
//       (async() => {
//         const response = await fetch('https://raw.githubusercontent.com/kodecocodes/recipes/master/Recipes.json');
//         const parsed = await response.json();
//         dataset(parsed);
//       })();
//     }, []);
  
//     return data;
// }

export function Home() {
    const [data, dataset] = useState({});
  
    useEffect(() => {
    (async() => {
        const response = await fetch('https://raw.githubusercontent.com/kodecocodes/recipes/master/Recipes.json');
        const parsed = await response.json();
        dataset(parsed);
    })();
    }, []);

    const recipes = data;
    console.log(recipes);

    return (
        <div>
            {/* <pre>{JSON.stringify(data[0].imageURL)}</pre> */}
        
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
                        <h5>{recipes[0].name}</h5>
                        <img src={recipes[0].imageURL} alt="" className='img-thumbnail'/>
                    </div>
                    <div className='col-md-4'>
                        <h5>{recipes[1].name}</h5>
                        <img src={recipes[1].imageURL} alt="" className='img-thumbnail'/>
                    </div>
                    <div className='col-md-4'>
                        <h5>{recipes[4].name}</h5>
                        <img src={recipes[4].imageURL} alt="" className='img-thumbnail'/>
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
                {recipes.map((recipe, index) => {
                    if (index+1 % 3 === 0) {
                        return (
                            <div className='row'>
                                <div className='col-md-4'>
                                    <img src={recipe.imageURL} alt="" />
                                    <p>{recipe.timers.reduce(function (x, y) {
                                        return x + y;
                                    }, 0)}</p>
                                </div>
                            </div>
                        );
                    }
                }
                )}
            </div>

        </div>
    );
}