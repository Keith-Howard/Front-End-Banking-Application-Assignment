import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

function NavBar() {

    return (
        <Navbar className="navbar">
            <Nav className="navbar navbar-expand-xl" style={{backgroundColor: "#FFFDD0", fontSize: "2em", width: '100%'}}>
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand text-danger navSpacing" style={({isActive}) => ({fontSize: "1.5em", marginRight: "25px", background: isActive ? '#ffffff' : '#FFFDD0',})}>BadBank</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink to="/components/CreateAccount" className="nav-link text-danger" style={({isActive}) => ({right: 'auto !important', left: '0px', marginRight: "25px", background: isActive ? '#ffffff' : '#FFFDD0',})}>Create Account</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/components/Login" className="nav-link text-danger" style={({isActive}) => ({marginRight: "25px", background: isActive ? '#ffffff' : '#FFFDD0',})}>Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/components/Deposit" className="nav-link text-danger" style={({isActive}) => ({marginRight: "25px", background: isActive ? '#ffffff' : '#FFFDD0',})}>Deposit</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/components/Withdraw" className="nav-link text-danger" style={({isActive}) => ({marginRight: "25px", background: isActive ? '#ffffff' : '#FFFDD0',})}>Withdraw</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/components/AllData" className="nav-link text-danger" style={({isActive}) => ({marginRight: "25px", background: isActive ? '#ffffff' : '#FFFDD0',})}>All Data</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </Nav>
        </Navbar>
    );

}

export default NavBar;