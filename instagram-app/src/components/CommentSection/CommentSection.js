import React from 'react';
import './CommentSection.css';


import DummyData from '../DummyData/DummyData';

const CommentSection = props => {
    return (
        //Main Container div for content for Comment Section

        <div className="user-comments">
            <div className="username-section">
                <p>
                    <strong>{props.dummyData.comments.username}</strong>
                </p>
            </div>

            <div className="comment-text">
                <p>
                    {props.dummyData.comments.text}
                </p>
            </div>

        </div>

        //Container div for Comment Section Ends Here
    );
};


export default CommentSection;