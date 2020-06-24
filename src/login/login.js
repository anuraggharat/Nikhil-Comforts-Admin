import React, { Component } from 'react';
import axios from 'axios'
import { API_URL } from '../url'
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoggedIn: false,
            tokenTimer: ""
          };
          this.onSubmit = this.onSubmit.bind(this);
    }


    change = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
    
    async onSubmit(e) {
        e.preventDefault();
        
        await axios.get(API_URL + "/auth/login", {
            params: {
                email: this.state.email,
                password: this.state.password
              }
        })
            .then(res => {
                const token = res.data.token
                if (token) {
                    const expiresInDuration = res.data.expiresIn;
                    this.setAuthTimer(expiresInDuration);
                    const now = new Date();
                    this.state.isLoggedIn = true;
                    const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                    localStorage.setItem('token', token);
                    localStorage.setItem('expiration', expirationDate.toString());
                    this.props.history.push("/AddBlog")                    
                }
        })
    }

    setAuthTimer(duration) {
        this.setState.tokenTimer = setTimeout(() => {
          this.logout();
        }, duration * 1000);
    }


    logout() {
        clearTimeout(this.state.tokenTimer);
        this.setState.isLoggedIn = false;
        this.clearAuthData();
        this.props.history.push("/")
      }


    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
      }

    render () {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                        <h4 class="card-title text-center">Login</h4>
                        <form class = "form-signin" method="POST">
                            <div class="form-group">
                            <label for="email">User Email</label>

                            <input
                                id="email"
                                type="email"
                                class="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={e => this.change(e)}
                                required
                                autofocus
                            />
                            </div>
                            
                            <div class="form-group">
                            <label for="password">
                                Password
                            
                            </label>
                            <input
                                id="password"
                                type="password"
                                class="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={e => this.change(e)}
                                required
                                data-eye
                            />
                            </div>
                            <div class="form-group no-margin">
                            <button
                                class="btn btn-info btn-block"
                                onClick={e => this.onSubmit(e)}
                            >
                                Login
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}




export default Login;