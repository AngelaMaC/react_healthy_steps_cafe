import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class MenuInfo extends Component {
	renderMenu(menu) {
        return (
            <div className="col-md-5 m-1">
					<Card onClick={() => this.onMenuSelect(menu)}>
						<CardImg width="100%" src={menu.image} alt={menu.name} />
						<CardImgOverlay>
							<CardTitle>{menu.name}</CardTitle>
						</CardImgOverlay>
					</Card>
        </div>
        );
    }

        renderComments(comments) {
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
                )
            }    
        }


        render() {
            if (this.props.menu) {
                return (
                    <div className="Container">
                        <div className="Row">
                        { this.renderMenu(this.props.menu) }
                        {this.renderComments(this.props.menu.comments)}
                        </div>
                    </div>
                );
            }
            return <div />;
        }
    }

export default MenuInfo;
