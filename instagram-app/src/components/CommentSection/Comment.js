import React from 'react';
import './CommentSection.css';


const Comment = props => {
    return (
        <div className="user-comments">
            <div className="username-section">
                <p>
                    <strong>{props.instaData.comments.username}</strong>
                </p>
            </div>

            <div className="comment-text">
                <p>
                    {props.instaData.comments.text}
                </p>
            </div>

        </div>
    );
};


export default Comment;