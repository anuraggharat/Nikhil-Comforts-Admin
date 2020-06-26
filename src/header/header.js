import React, { Component } from 'react';
import './header.css';

function Header(){
    
    const logout=()=>{
            localStorage.removeItem('token');
            localStorage.removeItem('expiration');
        window.location.reload(false)
    
    }

    
        return (
                <div className="ml-200 bg-light   p-2 px-3">
                        <div className = "d-flex  justify-content-between">
                            <h2 className="text-grey">Admin Dashboard</h2>
                            <button className="btn btn-outline-info" onClick={logout}>Logout</button>
                    </div>
                </div>

        );

    }



export default Header;