import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import MenuInfo from './MenuInfoComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MENUS } from '../shared/menus';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: MENUS,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS
        };
    }

  render() {
    const HomePage = () => {
        return (
            <Home
            menu={this.state.menus.filter(menu => menu.featured)[0]}
            promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
            partner={this.state.partners.filter(partner => partner.featured)[0]}
            />
        );
    }

    const MenuWithId = ({match}) => {
        return (
            <MenuInfo 
                menu={this.state.menus.filter(menu => menu.id === +match.params.menuId)[0]}
                comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.menuId)}
            />
        );
    }; 

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/directory' render={() => <Directory menus={this.state.menus} />} />
                <Route path='/directory/:menuId' component={MenuWithId} />
                <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />
                <Route exact path='/contactus' component={Contact} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}
}

export default Main;

//       return (
//         <div>
//             <Header />
//             <Switch>           
//                 <Route path='/home' component={HomePage} />
//                 <Route exact path='/directory' render={() => <Directory menus={this.state.menus}/>} />
//                 <Route path='/directory:menuId' component={MenuWithId} />
//                 <Route exact path='/aboutus' render={() => <About partners={this.state.partners} />} />
//                 <Route exact path='/contactus' component={Contact} />       
//                 <Redirect to='/home' />         
//             </Switch>
//             <Footer />
//         </div>
//       );
//   };
// }

// export default Main;