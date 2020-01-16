import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import MenuInfo from './MenuInfoComponent';

class Directory extends Component {
    constructor(props) {
		super(props);
		this.state = {
			selectedMenu: null
		};
    }
    
    onMenuSelect(menu) {
		this.setState({ selectedMenu: menu });
	}

    render() {
        const directory = this.props.menus.map(menu => {
            return (
                <div key={menu.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(menu.id)}>
                        <CardImg width="100%" src={menu.image} alt={menu.name} />
                        <CardImgOverlay>
                            <CardTitle>{menu.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <MenuInfo menu={this.state.selectedMenu} />
            </div>
        );
    }
}

export default Directory;