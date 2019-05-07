import React from 'react';
import './Comment.css';


const Comment = props => {
    return (
        <div className="user-comments">
            <div className="username-section">
                <p>
                    <strong>{props.comment.username}</strong>
                </p>
            </div>

            <div className="comment-text">
                <p>
                    {props.comment.text}
                </p>
            </div>

        </div>
    );
};


export default Comment;