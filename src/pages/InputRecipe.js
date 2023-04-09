import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from '../styles/InputRecipe.module.css';
import React from 'react';
import { Navbar } from './components/Navbar';

export class InputRecipe extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.bodyRecipe}>
                
                <Navbar/>
                <div className={`title ${styles.inRecipeTitle}`}>
                    <label for="nameTitle" className={`form-label ${styles.formLabelTitle}`}>Title</label>
                    <input type="text" className={styles.formControl} id="nameTitle"/>
                </div>   
                <div className={styles.inRecipeIngredients}>
                    <label for="exampleFormControlTextarea1" className={`form-label ${styles.formLabel}`}>Ingredients</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" rows="5"/>
                </div>
                <div className={styles.inRecipeSteps}>
                    <label for="stepsList" className={styles.formLabel}>Steps</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" rows="5"/>
                </div>
                <div className={styles.inRecipeBackstory}>
                    <label for="stepsList" className={styles.formLabel}>Backstory</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" rows="5"/>
                </div>
                <div className={styles.inRecipeFoodOrigin}>
                    <label for="stepsList" className={styles.formLabel}>Food Origin</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" rows="2"/>
                </div>
                <div className={styles.inRecipePortion}>
                    <label for="stepsList" className={styles.formLabel}>Portion</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" rows="2"/>
                </div>
                <div className={styles.inRecipeVideoDuration}>
                    <label for="stepsList" className={styles.formLabel}>Video Duration</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" rows="2"/>
                </div>
                <div className={`dropdown ${styles.inRecipeKategori}`}>
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Kategori
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Daging</a></li>
                        <li><a class="dropdown-item" href="#">Buah</a></li>
                        <li><a class="dropdown-item" href="#">Sayur</a></li>
                        <li><a class="dropdown-item" href="#">Karbohidrat</a></li>
                        <li><a class="dropdown-item" href="#">Manisan</a></li>
                        <li><a class="dropdown-item" href="#">Minuman</a></li>
                    </ul>
                </div>
                <div className={styles.inRecipeUploadPhoto}>
                    <label for="formFileLg" className={`form-label ${styles.formLabel}`}>Input Your Food Photo</label>
                    <input className={`form-control ${styles.formControl} form-control-lg ${styles.formControlLg}`} id="formFileLg" type="file"/>
                </div><br/>
                <div className={styles.inRecipeUploadVideo}>
                    <label for="formFileLg" className={`form-label ${styles.formLabel}`}>Input Your Link Food Video</label>
                    <input className={`form-control ${styles.formControl} form-control-lg ${styles.formControlLg}`} id="formFileLg" type="url"/>
                </div><br/>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="button" className="btn btn-outline-info">Publish</button>
                    <button type="button" className="btn btn-outline-danger">Cancel</button>
                </div>
                <h1>...</h1>
            </div>
        );
    }
}