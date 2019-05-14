import React from 'react';

import PropTypes from 'prop-types';


const NewComments = props => {
    return (
        <div className="new-comment-section">

            <div className="new-comment-field">
                <form onSubmit={props.addComment}>
                    <input type="text"
                        value={props.newComment}
                        placeholder="Add a comment..." 
                        />
                </form>

            </div>

        </div>

    );
};

export default NewComments;



