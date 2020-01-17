import React, { Component }  from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid d-flex align-items-center>
                    <div className="container">
                        <h1 className="display-2 text-center">Healthy Steps Cafe</h1>
                        <h2 className="lead text-center display-5">A healthy eatery and lifestyle cafe</h2>
                    </div>
                </Jumbotron>
                <Navbar sticky="top" expand="md" className="navbar navbar-dark justify-content-center">
                    <div className="container">
                        <NavbarBrand className="mr-auto"></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link mx-auto text-center" to="/home">
                                    <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>    
                                <NavItem>
                                    <NavLink className="nav-link mx-auto text-center" to="/directory">
                                    <i className="fa fa-list fa-lg" /> Directory
                                    </NavLink>
                                </NavItem>    
                                <NavItem>
                                    <NavLink className="nav-link mx-auto text-center" to="/aboutus">
                                    <i className="fa fa-info fa-lg" /> About
                                    </NavLink>
                                </NavItem>    
                                <NavItem>
                                    <NavLink className="nav-link mx-auto text-center" to="/contactus">
                                    <i className="fa fa-address-card fa-lg" /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>                            
                    </div>
                </Navbar>                               
            </React.Fragment>
        );
    }
}

export default Header;