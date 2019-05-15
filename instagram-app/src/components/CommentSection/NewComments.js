import React from 'react';
import PropTypes from 'prop-types';


const NewComments = props => {
    return (
        <div className="new-comment-section">

            <form onSubmit={props.addNewComment} onChange={props.commentHandler} >
                <input type="text"
                    value={props.comment}
                    placeholder="Add a comment..."
                    name="newCommentText"
                />
            </form>

        </div>

    );
};

export default NewComments;



