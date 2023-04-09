import React from "react";
import { Link } from "react-router-dom";

export class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });

        fetch('https://raw.githubusercontent.com/kodecocodes/recipes/master/Recipes.json')
            .then(response => response.json())
            .then(data => this.setState({ data: data }));
    }

    render() {
        const { data } = this.state;

        const isLoggedin = localStorage.getItem('access_token') !== "null";

        const logout = () => {
            localStorage.setItem('access_token', null);
            localStorage.setItem('loggedInEmail', null);
        }

        return (
            <div className="text-center">
                {isLoggedin?
                <div>
                    <h1 style={{color: "white"}}>Profile</h1>
                    <h3 style={{color: "white"}}>Name</h3>
                    <p style={{color: "white"}}>{localStorage.getItem('loggedInEmail')}</p>
                    <h3 style={{color: "white"}}>Email</h3>
                    <p style={{color: "white"}}>{localStorage.getItem('loggedInEmail')}</p>
                    <button className="btn btn-danger btn-lg" onClick={logout}>LOGOUT</button>
                </div>
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