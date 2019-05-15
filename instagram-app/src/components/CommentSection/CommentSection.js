import React from 'react';
import './CommentSection.css';

import Comment from './Comment';
import NewComments from './NewComments';
import PropTypes from 'prop-types';


class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            newCommentText: ""
        }
    }

    addNewComment = (event) => {
        event.preventDefault();
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    text: this.state.newCommentText,
                    username: "Daisy"
                }
            ],
            newCommentText: ""
        })
    }

    commentHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="comment-section-container">

                {this.state.comments.map(item => {
                    return <Comment comment={item} />
                })}

                <NewComments
                    comment={this.state.newCommentText}
                    addNewComment={this.addNewComment}
                    commentHandler={this.commentHandler}
                />



            </div>
        );
    }
};

export default CommentSection;
