import React from 'react';
import CommentForm from './CommentFormComponent';



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
                    {
                        props.comments.map(item => {
                            return (
                                <div>
                                    <div key={item.id}>
                                        <p className="text-justify">{item.comment}
                                            <br />
                                            {"-- " + item.author + ", " + readDate(item.date)}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </li>
                <li>
                    <CommentForm dishId={props.dishId} addComment={props.addComment} />
                </li>
            </ul>
        );
    }
    else {
        return (<div></div>);
    }
}



export default RenderComments;