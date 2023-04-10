import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from '../styles/InputRecipe.module.css';
import React from 'react';
import { Navbar } from './components/Navbar';
import { Link } from 'react-router-dom';

export class InputRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            judul: '',
            backstory: '',
            asalDaerah: '',
            servings: 0,
            tools: '',
            durasi_menit: 0,
            kategori: 'Daging',
            foto: '',
            video: '',
            rating: 0,
            numReviews: 0,
            ingredients: '',
            tools: '',
            steps: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    postRecipe = async (event) => {
        event.preventDefault();
        const recipesJson = {
          email: localStorage.getItem('loggedInEmail'),
          judul: this.state.judul,
          ingredients: this.state.ingredients,
          tools: this.state.tools,
          steps: this.state.steps,
          backstory: this.state.backstory,
          asalDaerah: this.state.asalDaerah,
          servings: this.state.servings,
          durasi_menit: this.state.durasi_menit,
          kategori: this.state.kategori,
          foto: this.state.foto,
          video: this.state.video,
          rating: 0,
          numReviews: 0
        }
        
        const response = await fetch(`http://127.0.0.1:8000/api/recipe`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recipesJson)
        });         
        console.log(JSON.stringify(recipesJson));
        const data = await response.json();
        console.log(data);
    }
    handleChange = (event) => {
        const { name, value } = event.target;
        console.log('handleChange called with', name, value);
        this.setState({ [name]: value });
      }

    handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    
    reader.onload = () => {
        this.setState({
        foto: reader.result
        });
    }
    }

    render() {        
        const isLoggedin = localStorage.getItem('access_token') !== "null";

        return (
            <div>
                <Navbar/>
                {isLoggedin?
                <form onSubmit={this.postRecipe} className={styles.bodyRecipe}>
                
                <div className={`title ${styles.inRecipeTitle}`}>
                    <label for="nameTitle" className={`form-label ${styles.formLabelTitle}`}>Title</label>
                    <input type="text" className={styles.formControl} id="nameTitle" name='judul' value={this.state.judul} onChange={this.handleChange}/>
                </div>   
                <div className={styles.inRecipeIngredients}>
                    <label for="exampleFormControlTextarea1" className={`form-label ${styles.formLabel}`}>Ingredients</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" name='ingredients' rows="5" onChange={this.handleChange}>{this.state.ingredients}</textarea>
                </div>
                <div className={styles.inRecipeSteps}>
                    <label for="exampleFormControlTextarea1" className={`form-label ${styles.formLabel}`}>Tools</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" name='tools' rows="5" onChange={this.handleChange}>{this.state.tools}</textarea>
                </div>
                <div className={styles.inRecipeSteps}>
                    <label for="stepsList" className={styles.formLabel}>Steps</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" name='steps' rows="5" onChange={this.handleChange}>{this.state.steps}</textarea>
                </div>
                <div className={styles.inRecipeBackstory}>
                    <label for="stepsList" className={styles.formLabel}>Backstory</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" name='backstory' rows="5" onChange={this.handleChange}>{this.state.backstory}</textarea>
                </div>
                <div className={styles.inRecipeFoodOrigin}>
                    <label for="stepsList" className={styles.formLabel}>Food Origin</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" name='asalDaerah' rows="2" onChange={this.handleChange}/>
                </div>
                <div className={styles.inRecipePortion}>
                    <label for="stepsList" className={styles.formLabel}>Portion</label>
                    <input type="number" className={`form-control ${styles.formControl}`} id="nameTitle" name='servings' rows="2" onChange={this.handleChange}/>
                </div>
                <div className={styles.inRecipeVideoDuration}>
                    <label for="stepsList" className={styles.formLabel}>Video Duration</label>
                    <input type="number" className={`form-control ${styles.formControl}`} id="nameTitle" name='durasi_menit' rows="2" onChange={this.handleChange}/>
                </div>
                <div className={`dropdown ${styles.inRecipeKategori}`}>
                    <select class="btn btn-secondary dropdown-toggle" name="kategori" id="kategori" value={this.state.kategori} onChange={this.handleChange}>
                        <option><a class="dropdown-item" href="#">Daging</a></option>
                        <option><a class="dropdown-item" href="#">Buah</a></option>
                        <option><a class="dropdown-item" href="#">Sayur</a></option>
                        <option><a class="dropdown-item" href="#">Karbohidrat</a></option>
                        <option><a class="dropdown-item" href="#">Manisan</a></option>
                        <option><a class="dropdown-item" href="#">Minuman</a></option>
                    </select>
                </div>
                <div className={styles.inRecipeUploadPhoto}>
                    <label for="formFileLg" className={`form-label ${styles.formLabel}`}>Input Your Food Photo</label>
                    <input className={`form-control ${styles.formControl} form-control-lg ${styles.formControlLg}`} id="formFileLg" type="file" name='foto' onChange={this.handleFileChange}/>
                </div><br/>
                <div className={styles.inRecipeUploadVideo}>
                    <label for="formFileLg" className={`form-label ${styles.formLabel}`}>Input Your Link Food Video</label>
                    <input className={`form-control ${styles.formControl} form-control-lg ${styles.formControlLg}`} id="formFileLg" type="url" name='video' value={this.state.video} onChange={this.handleChange}/>
                </div><br/>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-outline-info" >Publish</button>
                    <button type="reset" className="btn btn-outline-danger">Cancel</button>
                </div>
                <h1>...</h1>
            </form>
            :
            <div>
                <h2 style={{color: 'white'}}>You're not signed in yet!</h2>
                <Link to='/login'>
                    <button className="btn btn-success btn-lg">LOGIN</button>
                </Link>
            </div>
            }
            </div>
        );
    }
}