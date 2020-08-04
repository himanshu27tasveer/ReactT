import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


class DishDetail extends Component {
    constructor(props) {
        super(props);
    }


    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <div></div>
            );
    }

    renderComments(dish) {
        if (dish != null) {
            const commentlist = dish.comments.map(item => {
                return (
                    <div className="container">
                        <div key={item.id}>
                            <p>{item.comment}
                                <br />
                                {"-- " + item.author + ", " + item.date}
                            </p>
                        </div>
                    </div>
                );
            });
            return commentlist;
        }
        else {
            return (<div></div>);
        }
    }



    render() {

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1 container">
                    {(this.props.dish) ? <h4 className="container">Comments</h4> : ""}
                    {this.renderComments(this.props.dish)}
                </div>
            </div>
        );
    }
}


export default DishDetail;
