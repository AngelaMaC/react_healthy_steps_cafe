import React, { Component }  from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            <React.Fragment>

                <Navbar sticky="top" className="navbar navbar-dark navbar-expand-md justify-content-center">
                    <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
                    <span className="navbar-toggler-icon navbar-light"></span>
                    </button>
                    <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
                        <ul className="navbar-nav mx-auto text-center">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#menu-jump">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about-jump">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#location-jump">Locations</a> 
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#event-jump">Events</a> 
                            </li>                  
                        </ul>
                    </div>
                </Navbar>

                <Jumbotron fluid d-flex align-items-center>
                    <div className="container">
                        <h1 className="display-2 text-center">Healthy Steps Cafe</h1>
                        <h2 className="lead text-center display-5">A healthy eatery and lifestyle cafe</h2>
                    </div>
                </Jumbotron>
                               
            </React.Fragment>
        );
    }
}

export default Header;