import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from '../styles/InputRecipe.module.css';
import React from 'react';

export class InputRecipe extends React.Component {
    constructor(props) {
        super(props);
    }

    // TODO: ubah isi className, kasih page id gitu; example: className="title" -> className="in-recipe-title"
    //       ubah juga nama class nya di file css yang bersangkutan
    render() {
        return (
            <div className={styles.bodyRecipe}>
                <div className={styles.inRecipeTitle}>
                    <label for="nameTitle" className={styles.formLabelTitle}>Title</label>
                    <input type="text" className={styles.formControl} id="nameTitle"/>
                </div>   
                <div className={styles.inRecipeIngredients}>
                    <label for="exampleFormControlTextarea1" className={styles.formLabel}>Ingredients</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" rows="5"/>
                </div>
                <div className={styles.inRecipeSteps}>
                    <label for="stepsList" className={styles.formLabel}>Steps</label>
                    <textarea type="text" className={`form-control ${styles.formControl}`} id="nameTitle" rows="5"/>
                </div>
                <div className={styles.inRecipeUpload}>
                    <label for="formFileLg" className={`form-label ${styles.formLabel}`}>Input Your Food Photo</label>
                    <input className={`form-control${styles.formControl} form-control-lg${styles.formControlLg}`} id="formFileLg" type="file"/>
                </div><br/>
                <div className={styles.inRecipeUpload}>
                    <label for="formFileLg" className={`form-label ${styles.formLabel}`}>Input Your Food Video</label>
                    <input className={`form-control${styles.formControl} form-control-lg${styles.formControlLg}`} id="formFileLg" type="file"/>
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