import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import MenuInfo from './MenuInfoComponent';
import { MENUS } from '../shared/menus';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: MENUS,
            selectedMenu: null
        };
    }

onMenuSelect(menuId) {
    this.setState({selectedMenu: menuId});
}


  render() {
      return (
          <div>
              <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/"><h1>Healthy Steps Cafe</h1></NavbarBrand>
                </div>
              </Navbar>
              <Directory menus={this.state.menus} onClick={menuId => this.onMenuSelect(menuId)} />
              <MenuInfo menu={this.state.menus.filter(menu => menu.id === this.state.selectedMenu)[0]} />
            </div>
      );
  };
}

export default Main;