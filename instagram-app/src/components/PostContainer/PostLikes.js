import React from 'react';
import PropTypes from 'prop-types';


const PostLikes = props => {
    return (

        <div className="likes-section"
            onClick={props.incrementLikes} onChange={props.likesHandler} >
        </div>

    );
};

export default PostLikes;



