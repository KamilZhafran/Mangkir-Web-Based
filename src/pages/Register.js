import styles from '../styles/Register.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


export class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    state = {
        name: '',
        email: '',
        password: '',
      };

    handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
    };

    handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
    };

    handleNameChange = (event) => {
    this.setState({ name: event.target.value });
    };

    handleRegister = async (event) => {
        event.preventDefault();
        console.log(this.state.name, this.state.email, this.state.password);
        const response = await fetch('http://127.0.0.1:8000/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          }),
        });
        const data = await response.json();
        console.log(data);
      };

    render() {
        return (
            <div className={`wrapper ${styles.inLoginWrapper}`}>
                <div className={`container ${styles.inLoginContainer} main ${styles.inLoginMain}`}>
                    <div className={`row ${styles.inLoginRow}`}>
                        <div className={`col-md-6 side-image ${styles.sideImage}`}>
                            
                        </div>
                        <div class={`col-md-6 right ${styles.right}`}>
                            <div className={`input-box ${styles.inputBox}`}>
                                <header>Create account</header>
                                <form action="#" onSubmit={this.handleRegister}>
                                    <div className={`input-field ${styles.inputField}`}>
                                        <input type="text" className={`input ${styles.input}`} id="email" required autocomplete="off" onChange={this.handleNameChange}/>
                                        <label for="email">Name</label>
                                    </div>
                                    <div className={`input-field ${styles.inputField}`}>
                                        <input type="text" className={`input ${styles.input}`} id="email" required autocomplete="off" onChange={this.handleEmailChange}/>
                                        <label for="email">Email</label>
                                    </div>
                                    <div className={`input-field ${styles.inputField}`}>
                                        <input type="password" className={`input ${styles.input}`} id="password" required onChange={this.handlePasswordChange}/>
                                        <label for="password">Password</label>
                                    </div>
                                    <div class={`input-field ${styles.inputField}`}>
                                        <input type="submit" className={`submit ${styles.submit}`} value="Sign Up"/>                                   
                                    </div>
                                </form>
                                <div className={`signin ${styles.signin}`}>
                                    <span>Already have an account? <Link to="/login">Log in here</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}