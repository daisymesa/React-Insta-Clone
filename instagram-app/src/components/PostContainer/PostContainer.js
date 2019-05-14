import React from 'react';
import './PostContainer.css';

import Post from './Post';
import CommentSection from '../CommentSection/CommentSection';

import PropTypes from 'prop-types';


const PostContainer = props => {
    console.log("hi");

    return (
        <div className="post-container-section">

            {props.instaData.map(item => {
                return <Post instaData={item} key={props.instaData.id} />
            })}

        </div>
    );
};

console.log("Proptypes below");

PostContainer.propTypes = {
    instaData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            username: PropTypes.string,
            thumbnailUrl: PropTypes.string,
            likes: PropTypes.number,
            timestamp: PropTypes.string,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string,
                    username: PropTypes.string,
                    text: PropTypes.string
                })
            )

        })
    )
};

export default PostContainer;