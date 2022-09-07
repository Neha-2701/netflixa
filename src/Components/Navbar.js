import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',padding:'0.5',backgroundColor:'red'}}>
                <Link to="/" style={{textDecoration:'none',color:'white'}}><h1 style={{marginTop:'1rem',marginLeft:'1rem'}}>Netflixa</h1></Link>
                <Link to="/favourite" style={{textDecoration:'none',color:'white'}}><h2 style={{marginLeft:'2rem',marginTop:'1.5rem'}}>Favourites</h2></Link>
                
                
            </div>
        );
    }
}

export default Navbar;