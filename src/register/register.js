import React, {Component} from 'react'
import Header from '../header/header'
import Sidebar from '../Sidebar/Sidebar'
import axios from 'axios'
import { API_URL } from '../url'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            type: "sub-admin"
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
        const data = {
            email: this.state.email,
            password: this.state.password,
            type: this.state.type
        }
        await axios.post(API_URL + '/auth/createUser', { data })
            .then(res => {
                console.log(res.data.message);
                window.location.reload(false);
            })
    }


    render () {
        return(
            <div>
                <Header />
                <Sidebar />
                <div className="container">
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                        <h4 className="card-title text-center">Register</h4>
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
                            <label htmlFor="email">User Type</label>

                            <input
                                id="type"
                                type="text"
                                className="form-control"
                                name="type"
                                value={this.state.type}
                                onChange={e => this.change(e)}
                                required
                                disabled
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
                            <div className="form-group no-margin">
                            <button
                                className="btn btn-info btn-block"
                                onClick={e => this.onSubmit(e)}
                            >
                                Register
                            </button>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}




export default Register;