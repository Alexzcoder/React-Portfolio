import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class NavigationComponent extends Component {
    constructor(){
        super();

    }
    render(){
        return(
            <div>
                <NavLink exact to ='/'>
                    Home
                </NavLink>
                <NavLink  to ='/about-me'>
                    About
                </NavLink>
                <NavLink  to ='/contact-me'>
                    Contact
                </NavLink>
                <NavLink  to ='/my-blog'>
                    Blog
                </NavLink>


                
                
                {true ? <button>Add Blog</button> : null }
            </div>
        )
    }
}