import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderMenu({menu}) {
    return (
        <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={menu.image} alt={menu.name} />
                    <CardBody>
                        <CardTitle>{menu.name}</CardTitle>
                        <CardText>{menu.description}</CardText>
                    </CardBody>
                </Card>
        </div>
    );
}

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                { comments.map(comment => {
                    return (
                        <div key={comment.id}>
                            <p>{comment.text} <br />
                            {comment.author}, -- {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    )
                })}
            </div>
        );
    }
    return <div />;    
}


function MenuInfo(props) {
    if (props.menu) {
        return (
            <div className="container">
                <div className="row">
                    <RenderMenu menu={props.menu} />
                    <RenderComments comments={props.menu.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}
    

export default MenuInfo;
