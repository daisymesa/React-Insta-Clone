import React from 'react';

import PropTypes from 'prop-types';


const NewComments = props => {
    return (
        <div className="new-comment-section">


                <form>
                    <input type="text"
                        value={props.newComment}
                        placeholder="Add a comment..." 
                        />
                </form>


        </div>

    );
};

export default NewComments;



