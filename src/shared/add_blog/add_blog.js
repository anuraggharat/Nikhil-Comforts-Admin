import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../header/header';
import {postblog} from '../../ApiCalls'
import Loader from '../Loader'
export default function AddBlog() {
    const [values,setValues] =useState({
        title: "",
        subtitle: "",
        blog_content: "",
        posted_by: "",
        article_by: "",
        file:null,
        upload_date: new Date(),
    })
    
    const {title,subtitle,blog_content,posted_by,article_by,file,upload_date} = values
    const [loading,setLoading]=useState(false)
    const [response,setResponse]=useState('')
    const [error,setError]=useState('')

    
    const change=(event)=>{
        const name=event.target.name
        const value=event.target.value
        setValues({
            ...values,
            [name]:value
        })
        
    }
    
    const handleFile=(event)=>{
        setValues({...values,file:event.target.files[0]})
    }
    console.log(values)
    const  onSubmit=(e)=> {
        setLoading(true)
        e.preventDefault();
        const data = new FormData() 
        data.append('image',file)
        data.append("title",title );
        data.append("subtitle",subtitle );
        data.append("blog_content",blog_content );
        data.append("posted_by",posted_by );
        data.append("article_by",article_by );
        data.append("upload_date",upload_date );
        postblog(data)
        .then(res=>{
            if(res.success){
                setResponse(res.message)
            }
            else{
                setError(res.message)
            }
        })
        .catch(error=>setError(error))
        .finally(loading=>setLoading(false))
    }
    
    
    return (
<div>
                <Header></Header>
                <Sidebar></Sidebar>
                <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-7 col-lg-10 ml-auto">
                    <div className="card card-signin my-5">
                        <div className="card-body">
                        <h4 className="card-title text-center">Add Blog</h4>
                        {response ? (
                                              <div className="alert alert-success" role="alert">
                                              {response}
                                            </div>
                        ):(
                            null
                        )}   
                        <form className = "form-signin" encType = "multipart/form-data" >
                            
                            <div className="form-group">
                            <label htmlFor="email">Title</label>
                            <input
                                id="title"
                                type="text"
                                className="form-control"
                                name="title"
                                value={title}
                                onChange={e =>change(e)}
                                required
                            />
                            </div>

                            <div className="form-group">
                            <label htmlFor="subtitle">
                                Subtitle
                            </label>
                            <input
                                id="subtitle"
                                type="text"
                                className="form-control"
                                name="subtitle"
                                value={subtitle}
                                onChange={e => change(e)}
                                required
                            />
                            </div>
                            <div className="form-group">
                            
                            <label htmlFor="blog_content">
                                Blog Content
                            </label>
                            <textarea 
                                className="form-control" 
                                id="blog_content" 
                                rows="3" 
                                name="blog_content" 
                                value={blog_content}
                                onChange={e =>change(e)}
                                required></textarea>

                            
                            </div>
                            <div className="form-group">
                            <label htmlFor="blog_content">
                                Date
                            </label>
                            <input
                                id="upload_date"
                                type="date"
                                className="form-control"
                                name="upload_date"
                                value={upload_date}
                                onChange={e => change(e)}
                                disabled
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="posted_by">
                                Posted By:
                            </label>
                            <input
                                id="posted_by"
                                type="text"
                                className="form-control"
                                name="posted_by"
                                value={posted_by}
                                onChange={e =>change(e)}
                                required
                            />
                            </div>
                            <div className="form-group">
                            <label htmlFor="article_by">
                                Written By:
                            </label>
                            <input
                                id="article_by"
                                type="text"
                                className="form-control"
                                name="article_by"
                                value={article_by}
                                onChange={e =>change(e)}
                                required
                            />
                            </div>
                            <div className="custom-file">
                            <input type="file" className="custom-file-input" id="image_path" name="file" onChange={handleFile}  />
                            <label className="custom-file-label" htmlFor="image_path">Choose Image</label>
                            </div>
                            <div className="form-group mt-5">
                            {loading ? 
                            (
                                <Loader />
                            ):(
                                <button
                                className="btn btn-info btn-block"
                                onClick={e => onSubmit(e)}
                            >
                                Add
                            </button>
                            )}
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    )
}
