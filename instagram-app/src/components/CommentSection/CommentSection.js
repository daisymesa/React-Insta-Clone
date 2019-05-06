import React from 'react';
import './CommentSection.css';

import Comment from './Comment';


const CommentSection = props => {
    return (
        <div className="comment-section-container">
            {props.instaData.map(instaDataFromMap => {
                return <Comment instaData={instaDataFromMap} />
            })}
        </div>
    );
};


export default CommentSection;



{/* <div className="username-section">
                <p>
                    <strong>{props.instaData.comments.username}</strong>
                </p>
            </div>

            <div className="comment-text">
                <p>
                    {props.instaData.comments.text}
                </p>
            </div> */}