import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props){
    return (
        <div className='navBarStyleContainer' >
            <div className='nav-bar-container'>
            <Link to='/' className='navBarStyle'>Home Page</Link>
            <Link to='/forrent' className='navBarStyle'>For Rent</Link>
            <Link to='/forsale' className='navBarStyle'>For Sale</Link>
            <Link to='/aboutus' className='navBarStyle'>About Us</Link>
            {props.token && <Link to='/agentpage' className='navBarStyle'>Property List</Link>}
            </div>
            <div className='nav-bar-container' >
            <Link to='/auth' className='navBarStyle'>Agent Sign In</Link>
            
            {props.token && <button onClick={props.logout} >Logout</button>}
            </div>
        </div>
    )
}

export default Navbar