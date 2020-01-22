import React from "react";
import axios from "axios";

class Login extends React.Component {
    state = {
        credentials: {
            username:"",
            password:""
        }
    }; 

    handleChanges = event => {
        this.setState({
            credentials:{
                ...this.state.credentials,[event.target.name]: event.target.value
            }
        })
    }

    loginIn = event => {
        axios.post("http://localhost:5000/api/login", {
            username:this.state.credentials.username,
            password:this.state.credentials.password
        })
        .then(response => {
            localStorage.setItem("token", response.data.payload)
        })
        .catch(error => console.log("Error", error))
    }

    render() {
        return (
            <div>
            <h1>Sign in Here</h1>
            <form onSubmit={this.loginIn}>
                <input 
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChanges}
                placeholder="Enter Username"
                
                />
                 <input 
                type="text"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChanges}
                placeholder="Enter Password"
                
                />
<button>Log In</button>

            </form>


            </div>
        )
    }
}

export default Login;