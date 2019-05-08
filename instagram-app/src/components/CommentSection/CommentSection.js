import React from 'react';
import './CommentSection.css';

import Comment from './Comment';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
        }
        console.log(this.state.comments);
    }

    render () {
        return (
            <div className="comment-section-container">
    
                {this.state.comments.map(item => {
                    return <Comment comment={item} />
                })}


    
            </div>
        );
    }
};

export default CommentSection;
