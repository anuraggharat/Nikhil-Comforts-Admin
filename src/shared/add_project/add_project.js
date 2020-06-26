import React, { useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import Header from '../../header/header';
import {postproject} from '../../ApiCalls'
import Loader from '../Loader'


export default function Add_project() {

    const [values,setValues] =useState({
        title: "",
        description: "",
        category:"",
        file:null,
        upload_date: new Date(),
    })
    
    const {title,description,category,file,upload_date} = values
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
        console.log(values)
        setLoading(true)
        e.preventDefault();
        const data = new FormData() 
        data.append('image',file)
        data.append("title",title );
        data.append("description",description );
        data.append("category",category );
        data.append("upload_date",upload_date );
        postproject(data)
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
                    <div className="col-sm-9 col-md-7 col-lg-10 ml-auto">
                    <div className="card border-0 shadow-lg my-5">
                        <div className="card-body">
                        <h4 className="card-title text-center">Add Project</h4>
                        <form className = "form-signin" encType = "multipart/form-data">
                        {response ? (
                                              <div className="alert alert-success" role="alert">
                                              {response}
                                            </div>
                        ):(
                            null
                        )}  
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
{/* 
                            <div class="form-group">
                            <label for="blog_content">
                                Date
                            </label>
                            <input
                                id="upload_date"
                                type="date"
                                class="form-control"
                                name="upload_date"
                                value={upload_date}
                                onChange={e => this.change(e)}
                                disabled
                            />
                            </div> */}
                             <div className="form-group">
                             <div className="custom-file">
                            <input type="file" className="custom-file-input" id="image_path" name="file" onChange={handleFile}  />
                            <label className="custom-file-label" htmlFor="image_path">Choose Image</label>
                            </div>
                             </div>
                            
                            <div className="form-group">
                            <label htmlFor="">Description</label>
                            <input
                                id="description"
                                type="text"
                                className="form-control"
                                name="description"
                                value={description}
                                onChange={e =>change(e)}
                                required
                            />
                            </div>
                            <div className="form-group">
                            <label for="category">Category</label>
                            <input
                                id="category"
                                type="text"
                                className="form-control"
                                name="category"
                                value={category}
                                onChange={e => change(e)}
                                required
                            />
                            </div>
                            <div className="form-group no-margin">
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
