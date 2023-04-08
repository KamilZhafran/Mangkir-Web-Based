import styles from '../styles/Login.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';


export class Login extends React.Component {
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

    handleLogin = async (event) => {
        event.preventDefault();
    
        const loginData = {
          email: this.state.email,
          password: this.state.password,
        };
        console.log(loginData);
    
        try {
          const response = await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginData),
          });
    
          const responseData = await response.json();
          localStorage.setItem('access_token', responseData.token);
          localStorage.setItem('loggedInEmail', responseData.email);
          if (responseData.token){
            window.location.href = '/';
          }else{
            console.log("login gagal");
          }
          // You can handle the response data here
        } catch (error) {
          console.log(error);
          // You can handle the error response data here
        }
      };

    render() {
        return (
            <div className={`wrapper ${styles.inLoginWrapper}`}>
                <div className={`container ${styles.inLoginContainer} main ${styles.inLoginMain}`}>
                    <div className={`row ${styles.inLoginRow}`}>
                        <div className={`col-md-6 side-image ${styles.sideImage}`}>
                            
                        </div>
                        <div class={`col-md-6 right ${styles.right}`}>
                            <form action="#" onSubmit={this.handleLogin}>
                                <div className={`input-box ${styles.inputBox}`}>
                                    <header>Login</header>
                                    <div className={`input-field ${styles.inputField}`}>
                                        <input type="text" className={`input ${styles.input}`} id="email" required autocomplete="off" onChange={this.handleEmailChange}/>
                                        <label for="email">Email</label>
                                    </div>
                                    <div className={`input-field ${styles.inputField}`}>
                                        <input type="password" className={`input ${styles.input}`} id="password" required onChange={this.handlePasswordChange}/>
                                        <label for="password">Password</label>
                                    </div>
                                    <div class={`input-field ${styles.inputField}`}>
                                        <input type="submit" className={`submit ${styles.submit}`} value="Log In"/>                                   
                                    </div>
                                    <div className={`signin ${styles.signin}`}>
                                        <span>Haven't got any account yet? <Link to="/register"> Register Here!</Link></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}