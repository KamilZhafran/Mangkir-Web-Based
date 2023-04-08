import styles from '../styles/Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={`wrapper ${styles.inLoginWrapper}`}>
                <div className={`container ${styles.inLoginContainer} main ${styles.inLoginMain}`}>
                    <div className={`row ${styles.inLoginRow}`}>
                        <div className={`col-md-6 side-image ${styles.sideImage}`}>
                            
                        </div>
                        <div class={`col-md-6 right ${styles.right}`}>
                            <div className={`input-box ${styles.inputBox}`}>
                                <header>Login</header>
                                <div className={`input-field ${styles.inputField}`}>
                                    <input type="text" className={`input ${styles.input}`} id="email" required autocomplete="off"/>
                                    <label for="email">Email</label>
                                </div>
                                <div className={`input-field ${styles.inputField}`}>
                                    <input type="password" className={`input ${styles.input}`} id="password" required/>
                                    <label for="password">Password</label>
                                </div>
                                <div class={`input-field ${styles.inputField}`}>
                                    <input type="submit" className={`submit ${styles.submit}`} value="Sign Up"/>                                   
                                </div>
                                <div className={`signin ${styles.signin}`}>
                                    <span>Haven't got any account yet? <Link to="/register"> Register Here!</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}