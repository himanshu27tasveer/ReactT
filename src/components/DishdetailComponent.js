import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';




function renderDish(dish) {
    if (dish != null)
        return (
            <Card >
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



function readDate(date) {
    const options = { year: 'numeric', month: 'short', day: '2-digit' }
    const dt = new Intl.DateTimeFormat('en-in', options);
    return dt.format(new Date(Date.parse(date)))
}




function renderComments(comments) {
    if (comments != null) {
        const commentlist = comments.map(item => {
            return (
                <div>
                    <div key={item.id}>
                        <p>{item.comment}
                            <br />
                            {"-- " + item.author + ", " + readDate(item.date)}
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




const DishDetail = (props) => {

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/home">Home</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {renderDish(props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {(props.comments) ? <h4>Comments</h4> : ""}
                    {renderComments(props.comments)}
                </div>
            </div>
        </div>
    );
}




export default DishDetail;