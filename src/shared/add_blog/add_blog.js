import React, { Component } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../header/header';
import axios from 'axios';
import { API_URL } from '../../url'


class AddBlog extends Component {
    constructor(propos) {
        super(propos);
        var date = new Date();
        // if (date.getMonth() < 10)
        //     var mm = '0' + (date.getMonth() + 1);
        // else
        //     var mm = date.getMonth() + 1;

        // var year = date.getFullYear();
        // var date = date.getDate();
        this.state = {
            title: "",
            subtitle: "",
            blog_content: "",
            slide_url: "",
            videos: "",
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
            subtitle: this.state.subtitle,
            blog_content: this.state.blog_content,
            slide_url: this.state.slide_url,
            videos: this.state.videos,
            uploadDate: this.state.upload_date
        }
        axios.post(API_URL + "/blogs/addBlog", { data })
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
                        <h4 class="card-title text-center">Add Blog</h4>
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
                            <label for="subtitle">
                                Subtitle
                            </label>
                            <input
                                id="subtitle"
                                type="text"
                                class="form-control"
                                name="subtitle"
                                value={this.state.subtitle}
                                onChange={e => this.change(e)}
                                required
                            />
                            </div>
                            <div class="form-group">
                            <label for="blog_content">
                                Blog Content
                            </label>
                            <input
                                id="blog_content"
                                type="text"
                                class="form-control"
                                name="blog_content"
                                value={this.state.blog_content}
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
                            <label for="slide_url">
                                Slide URL
                            </label>
                            <input
                                id="slide_url"
                                type="text"
                                class="form-control"
                                name="slide_url"
                                value={this.state.slide_url}
                                onChange={e => this.change(e)}
                                required
                            />
                            </div>
                            <div class="form-group">
                            <label for="videos">
                                Videos
                            </label>
                            <input
                                id="videos"
                                type="text"
                                class="form-control"
                                name="videos"
                                value={this.state.videos}
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



export default AddBlog;