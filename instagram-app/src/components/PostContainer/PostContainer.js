import React from 'react';
import './PostContainer.css';

import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

import PropTypes from 'prop-types';


const PostContainer = props => {
    return (

        <div className="post-container-section">
        
            {props.instaData.map(item => {
                return <Post instaData={item} />
            })}

        </div>
    );
};

export default PostContainer;