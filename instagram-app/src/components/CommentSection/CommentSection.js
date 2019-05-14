import React from 'react';
import './CommentSection.css';

import Comment from './Comment';
import NewComments from './NewComments';

import PropTypes from 'prop-types';



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
      }

    //   addNewComment = (event) => {
    //     const newComment = {text: this.state.newComment};
    //     this.state.comments.push(newComment);
    // }

    render () {
        return (
            <div className="comment-section-container">
    
                {this.state.comments.map(item => {
                    return <Comment comment={item} />
                })}

                <NewComments 
                    comment={this.state.comment}
                    addComment={this.commentHandler}
                />
    
            </div>
        );
    }
};

export default CommentSection;
