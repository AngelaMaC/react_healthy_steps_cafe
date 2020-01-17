import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import MenuInfo from './MenuInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MENUS } from '../shared/menus';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: MENUS,
        };
    }

  render() {
    const HomePage = () => {
        return (
            <Home />
        );
    }

      return (
        <div>
            <Header />
            <Switch>           
                <Route path='/home' component={HomePage} />
                <Route exact path='/directory' render={() => <Directory menus={this.state.menus}/>} />       
                <Redirect to='/home' />         
            </Switch>
            <Footer />
        </div>
      );
  };
}

export default Main;