import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './sidebar.css'

class Sidebar extends Component {


    render () {
        return (
            <div className="sidenav bg-first  text-white">
                <Link to = "/Register" className=" text-white">Register User</Link>
                <Link to = "/AddBlog" className=" text-white">Add Blog</Link>
                <Link to = "/AddProject" className=" text-white">Add Project</Link>
            </div>
        );
    }
}



export default Sidebar;