import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor(propos) {
        super();
    }

    render() {
        return (
            <div class = "mainContent">
                <div class = "jumbotron">
                    <div class = "container">
                        <div class = "page-header">
                            <h1> <i class="fas fa-box"></i>   Admin Dashboard</h1>
                            <p class = "lead"></p>
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}


export default Header;