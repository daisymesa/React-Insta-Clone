import React from 'react';
import PropTypes from 'prop-types';


const PostLikes = props => {
    return (

        <div className="likes-section">
            {props.likes}
        </div>

    );
};

export default PostLikes;



