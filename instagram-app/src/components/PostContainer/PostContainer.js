import React from 'react';
import './PostContainer.css';

import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return (

        <div className="post-container-section">
        
            {props.instaData.map(item => {
                return <Post instaData={item} />
            })}

            <CommentSection instaData={props.instaData} />

        </div>

    );
};



export default PostContainer;