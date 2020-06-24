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
                <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                        <h4 class="card-title text-center">Register</h4>
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
                            <label for="email">User Type</label>

                            <input
                                id="type"
                                type="text"
                                class="form-control"
                                name="type"
                                value={this.state.type}
                                onChange={e => this.change(e)}
                                required
                                disabled
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