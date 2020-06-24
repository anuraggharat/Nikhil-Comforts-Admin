import React, { Component } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../header/header';
import axios from 'axios';
import { API_URL } from '../../url'


class AddProject extends Component {
    constructor(propos) {
        super(propos);
        var date = new Date();
        this.state = {
            title: "",
            image: "",
            upload_date: date
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
            title: this.state.title,
            image: this.state.image,
            uploadDate: this.state.upload_date
        }
        axios.post(API_URL + "/projects/addProject", { data })
            .then(res => {
                console.log(res.data.message);
                window.location.reload(false);
            })
    }

    render () {
        return (
            <div>
                <Header></Header>
                <Sidebar></Sidebar>
                <div class="container">
                <div class="row">
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div class="card card-signin my-5">
                        <div class="card-body">
                        <h4 class="card-title text-center">Add Project</h4>
                        <form class = "form-signin" method="POST">
                            <div class="form-group">
                            <label for="email">Title</label>
                            <input
                                id="title"
                                type="text"
                                class="form-control"
                                name="title"
                                value={this.state.title}
                                onChange={e => this.change(e)}
                                required
                            />
                            </div>

                            <div class="form-group">
                            <label for="blog_content">
                                Date
                            </label>
                            <input
                                id="upload_date"
                                type="date"
                                class="form-control"
                                name="upload_date"
                                value={this.state.upload_date}
                                onChange={e => this.change(e)}
                                disabled
                            />
                            </div>
                            <div class="form-group">
                            <label for="image">
                                IMAGE URL
                            </label>
                            <input
                                id="image"
                                type="text"
                                class="form-control"
                                name="image"
                                value={this.state.image}
                                onChange={e => this.change(e)}
                                required
                            />
                            </div>
                            <div class="form-group no-margin">
                            <button
                                class="btn btn-info btn-block"
                                onClick={e => this.onSubmit(e)}
                            >
                                Add
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



export default AddProject;