import React from 'react';
import './PostContainer.css';

import Post from './Post';


const PostContainer = props => {
    return (
        //Main Container div for Post Container
        <div className="post-container-section">
            {props.instaData.map(instaDataFromMap => {
                return <Post instaData={instaDataFromMap} />
            })}
        </div>
        //Container div for Post Container Ends Here
    );
};



export default PostContainer;