import React from 'react';
import './CommentSection.css';

import Comment from './Comment';
import NewComments from './NewComments';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments
            
        }
        console.log(this.state.comments);
    }

    
      commentHandler = (event) => {
        this.setState({
          newComment: event.state.value
        })
        console.log(this.state.newComment)
      }

    render () {
        return (
            <div className="comment-section-container">
    
                {this.state.comments.map(item => {
                    return <Comment comment={item} />
                })}

                <NewComments />
    
            </div>
        );
    }
};

export default CommentSection;
