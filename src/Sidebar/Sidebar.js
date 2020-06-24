import React, {Component} from 'react';
import { Link, Route, BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import './sidebar.css'
import Login from '../login/login'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(e) {
        e.preventDefault();
        this.clearAuthData();
        window.location.reload(false)
    }


    clearAuthData() {
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
    }

    render () {
        return (
            <div class="sidenav">
                <Link to = "/Register">Register User</Link>
                <Link to = "/AddBlog">Add Blog</Link>
                <Link to = "/AddProject">Add Project</Link>
                <a href="#" onClick={e => this.onSubmit(e)}>Logout</a>
            </div>

        );
    }
}



export default Sidebar;