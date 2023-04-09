import React from "react";
import { Navbar } from './components/Navbar';
import { Link } from "react-router-dom";
import styles from '../styles/Search.module.css';

export class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            searchField: "",
            categoryField: ""
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/api/recipes')
            .then(response => response.json())
            .then((result) => {
                this.setState({
                    data: result
                });
            })
    }

    render() {
        const { data } = this.state;

        const filtered = data.filter(
            recipe => {
                return (
                    recipe.judul.toLowerCase().includes(this.state.searchField.toLowerCase())
                    &&
                    recipe.kategori.toLowerCase().includes(this.state.categoryField.toLowerCase())
                );
            }
        );

        const handleSearch = (event) => {
            this.setState({
                searchField: event.target.value
            })
        }

        const handleCategory = (event) => {
            this.setState({
                categoryField: event.target.value
            })
        }

        return(
            <div style={{
                marginLeft: '30px',
                marginRight: '30px'
            }}>
                <Navbar></Navbar>
                <div className="row">
                    <div className="col-md-11">
                        <input className='form-control form-control-lg' type="text" onChange={handleSearch} name="searchField" style={{
                            marginBottom: '30px'
                        }} />
                    </div>
                    <div className="col-md-1 drop-down">
                        <select class="btn btn-lg btn-secondary dropdown-toggle" name="kategori" id="kategori" onChange={handleCategory}>
                            <option></option>
                            <option>Daging</option>
                            <option>Buah</option>
                            <option>Sayur</option>
                            <option>Karbohidrat</option>
                            <option>Manisan</option>
                            <option>Minuman</option>
                        </select>
                    </div>
                </div>
                <div className='container-fluid'>
                    <div className='row d-flex justify-content-center'>
                        {filtered?.map((recipe, index) => {
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
            </div>
        );
    }
}