import React from 'react';



const NewComments = props => {
    return (
        <div className="new-comment-section">

            <div className="new-comment-field">
                <form>
                    <input type="text"
                        value={props.newComment}
                        placeholder="Add a comment..." />
                </form>

            </div>

        </div>

    );
};

export default NewComments;



