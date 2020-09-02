import React from 'react';
import CommentForm from './CommentFormComponent';
import { Fade, Stagger } from 'react-animation-components';


function readDate(date) {
    const options = { year: 'numeric', month: 'short', day: '2-digit' }
    const dt = new Intl.DateTimeFormat('en-in', options);
    return dt.format(new Date(Date.parse(date)))
}

function RenderComments(props) {
    if (props.comments != null) {
        return (
            <ul className="list-unstyled">
                <li><h4>Comments</h4></li>
                <li>
                    <Stagger in>
                        {props.comments.map((item) => {
                            return (
                                <Fade in>
                                    <div key={item.id}>
                                        <div>
                                            <p className="text-justify">{item.comment}
                                                <br />
                                                {"-- " + item.author + ", " + readDate(item.date)}
                                            </p>
                                        </div>
                                    </div>
                                </Fade>
                            );
                        })}
                    </Stagger>
                </li>
                <li>
                    <CommentForm dishId={props.dishId} postComment={props.postComment} />
                </li>
            </ul>
        );
    }
    else {
        return (<div></div>);
    }
}



export default RenderComments;