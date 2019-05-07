import React from 'react';
import './CommentSection.css';

import Comment from './Comment';


const CommentSection = props => {
    return (
        <div className="comment-section-container">
            {props.instaData.map(item => {
                return <Comment instaData={item} />
            })}

            <CommentSection instaData={props.instaData} />

        </div>
    );
};


export default CommentSection;
