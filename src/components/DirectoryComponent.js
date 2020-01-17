import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderDirectoryItem({menu}) {
    return (
        <Card>
            <CardImg width="100%" src={menu.image} alt={menu.name} />
            <CardImgOverlay>
                <CardTitle>{menu.name}</CardTitle>
            </CardImgOverlay>
    </Card>
    );
}

function Directory (props) {
    const directory = props.menus.map(menu => {
        return (
            <div key={menu.id} className="col-md-5 m-1">
                <RenderDirectoryItem menu={menu}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;