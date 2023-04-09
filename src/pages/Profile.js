import React from "react";

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

        const logout = () => {
            localStorage.setItem('access_token', null);
            localStorage.setItem('loggedInEmail', null);
        }

        return (
            <div className="text-center">
                <h1 style={{color: "white"}}>Profile</h1>
                <h3 style={{color: "white"}}>Name</h3>
                <p style={{color: "white"}}>{localStorage.getItem('loggedInEmail')}</p>
                <h3 style={{color: "white"}}>Email</h3>
                <p style={{color: "white"}}>{localStorage.getItem('loggedInEmail')}</p>
                <button className="btn btn-danger btn-lg" onClick={logout}>LOGOUT</button>
            </div>
        );
    }
}