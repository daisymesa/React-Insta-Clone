import React from 'react';
import './CommentSection.css';


// import DummyData from '../DummyData/DummyData';

const CommentSection = props => {
    return (
        //Main Container div for content for Comment Section

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

        //Container div for Comment Section Ends Here
    );
};


export default CommentSection;