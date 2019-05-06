import React from 'react';
import './PostContainer.css';

import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return (
        <div className="main-post-container">

            <div className="post-container-section">
                {props.instaData.map(item => {
                    return <Post instaData={item} />
                })}
            </div>

            <div className="comment-container-section">
                <CommentSection />
            </div>

        </div>
    );
};



export default PostContainer;