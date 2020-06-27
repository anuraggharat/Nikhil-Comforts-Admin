import React, { Component } from 'react';
import {loginAdmin} from '../ApiCalls'
import Loader from '../shared/Loader'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            isLoggedIn: false,
            tokenTimer: "",
            loading:false,
            errors:''    
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
        this.setState({...this.state,loading:true})
        // await axios.get(API_URL + "/auth/login", {
        //     params: {
        //         email: this.state.email,
        //         password: this.state.password
        //       }
        // })
        //     .then(res => {
        //         const token = res.data.token
        //         if (token) {
        //             const expiresInDuration = res.data.expiresIn;
        //             this.setAuthTimer(expiresInDuration);
        //             const now = new Date();
        //             this.state.isLoggedIn = true;
        //             const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
        //             localStorage.setItem('token', token);
        //             localStorage.setItem('expiration', expirationDate.toString());
        //             this.props.history.push("/AddBlog")                    
        //         }
        // })
        loginAdmin({email:this.state.email,password:this.state.password})
        .then(res=>{
            const token = res.token
            if (res.success) {
                const expiresInDuration = res.expiresIn;
                this.setAuthTimer(expiresInDuration);
                const now = new Date();
                this.state.isLoggedIn = true;
                const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expiration', expirationDate.toString());
                this.props.history.push("/AddBlog")                    
            }
            else{
                this.setState({...this.state,errors:res.message,loading:false})
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
            <div className="container pt-5">
                <div className="w-100 text-center">
                    <h2 className="logo">NIKHIL COMFORT'S</h2>
                </div>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-6 mx-auto">
                    <div className="card border-0  my-5">
                        <div className="card-body">
                        <h4 className="card-title text-left"><u>Admin Login</u></h4>
                        {this.state.errors ?  (
                            <div className="alert alert-danger" role="alert">
                            {this.state.errors}
                          </div>
                        ):(
null
                        )}
                        <form className = "form-signin" method="POST">
                            <div className="form-group">
                            <label htmlFor="email">User Email</label>

                            <input
                                id="email"
                                type="email"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={e => this.change(e)}
                                required
                                autoFocus
                            />
                            </div>
                            
                            <div className="form-group">
                            <label htmlFor="password">
                                Password
                            
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={e => this.change(e)}
                                required
                                data-eye
                            />
                            </div>
                            {this.state.loading ? (<Loader />):
                            (
                                <div className="form-group no-margin">
                                <button
                                    className="btn btn-first text-white btn-block"
                                    onClick={e => this.onSubmit(e)}
                                >
                                    Login
                                </button>
                                </div>

                            )}
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