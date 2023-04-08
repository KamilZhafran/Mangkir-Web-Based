import styles from '../styles/LoginRegister.module.css';
import React, { useRef, useState } from 'react';

export class LoginRegister extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isContainerActive: false
        }
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
    
    // TODO: ubah isi className, kasih page id gitu; example: className="title" -> className="in-recipe-title"
    //       ubah juga nama class nya di file css yang bersangkutan
    render() {
        // TODO: masih gabisa nih pencet button add/remove class
        let check = false;

        const registerButton = () => {
            this.setState(prevState => ({
                isContainerActive: !prevState.isContainerActive
            }));
            console.log("register button clicked");
        }

        const loginButton = () => {
            this.setState(prevState => ({
                isContainerActive: !prevState.isContainerActive
            }));
            console.log("login button clicked");
        }

        // console.log(this.state.isContainerActive);

        return (
            <div className={styles.bodyLogin}>
                <div className={`${styles.container} ${this.state.isContainerActive?` ${styles.rightPanelActive}`:''}`} id="container">
    
                    <div className={`${styles.formContainer} ${styles.registerContainer}`}>
                        <form action="#" onSubmit={this.handleRegister}>
                            <h1>Register here.</h1>
                            <input type="text" placeholder="Name" onChange={this.handleNameChange}/>
                            <input type="email" placeholder="Email" onChange={this.handleEmailChange}/>
                            <input type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                            <button>Register</button>
                        </form>
                    </div>

                    <div className={`${styles.formContainer} ${styles.loginContainer}`}>
                        <form action="#" className={styles.formLogin} onSubmit={this.handleLogin}>
                            <h1>Login here.</h1>
                            <input type="email" placeholder="Email" onChange={this.handleEmailChange}/>
                            <input type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
                            <div className={styles.content}>
                            <div className={styles.checkbox}>
                                <input type="checkbox" name="checkbox" id="checkbox"/>
                                <label>Remember me</label>
                            </div>
                            <div className={styles.passLink}>
                                <a href="#">Forgot password?</a>
                            </div>
                            </div>
                            <button>Login</button>
                        </form>
                    </div>

                    <div className={styles.overlayContainer}>
                        <div className={styles.overlay}>
                            <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                            <h1 className={styles.title}>Hello <br/> peeps!</h1>
                            <p>if you already have an account, login here and start your mangkir journey</p>
                            <button className={styles.ghost} id="login" onClick={loginButton}>Login
                                <i className={`${styles.lni} ${styles.lniArrowLeft} ${styles.login}`}></i>
                            </button>
                            </div>
                            <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                            <h1 className={styles.title}>Start your <br/> mangkir now!</h1>
                            <p>if you don't have an account yet, join us and start your mangkir journey.</p>
                            <button className={styles.ghost} id="register" onClick={registerButton}>Register
                                <i className={`${styles.lni} ${styles.lniArrowRight} ${styles.register}`}></i>
                            </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            
        );
    }
}