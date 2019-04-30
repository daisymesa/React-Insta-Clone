import React from 'react';
import dummyData from './dummy-data.js';

const CommentSection = () => {
    return (
        //Main Container div for Comment Section

        <div className="comment-section">
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