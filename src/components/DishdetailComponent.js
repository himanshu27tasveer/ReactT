import React from 'react';
import {
    Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import RenderComments from './DishDetailFunctions/RenderComments';
import RenderDish from './DishDetailFunctions/RenderDish';



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
                    <RenderDish dish={props.dish}
                        isLoading={props.isLoading}
                        errMess={props.errMess}
                    />
                </div>
                <div className="col-12 col-md-5 m-1 text-justify">
                    <RenderComments comments={props.comments}
                        addComment={props.addComment}
                        dishId={props.dish.id}
                    />

                </div>

            </div>
        </div>
    );
}




export default DishDetail;
