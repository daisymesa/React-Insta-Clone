import React from 'react';
import './Post.css';

import CommentSection from '../CommentSection/CommentSection';
// import PostLikes from '../PostContainer/PostLikes';
// import DummyData from '../DummyData/DummyData';

import PropTypes from 'prop-types';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.instaData.likes
        }
    }

    incrementLikes = (event) => {
        event.preventDefault();
        let likes = this.props.instaData.likes + 1;
        this.setState = ({ likes });
    }

    likesHandler = (event) => {
        event.preventDefault();

    }

    render() {
        return (
            <div className="post-section">


                <div className="post-header">
                    <div className="user-profile-picture">
                        <img src={this.props.instaData.thumbnailUrl} alt="User Thumbnail" />
                    </div>
                    <div className="username-section">
                        <h3>{this.props.instaData.username}</h3>
                    </div>
                </div>


                <div className="post-main-image">
                    <img src={this.props.instaData.imageUrl} alt="User Post" />
                </div>


                <div className="interact-icons">

                    <div className="icon-heart">
                        <img src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" alt="Heart Icon" onClick={this.incrementLikes}
                            likes={this.props.instaDatalikes} />
                    </div>

                    <div className="icon">
                        <img src="https://banner2.kisspng.com/20180410/gkq/kisspng-computer-icons-download-internet-forum-comment-5acc485b875552.7926656815233373075543.jpg" alt="Comment Bubble Icon" />
                    </div>
                </div>


                <div className="post-likes">
                    <strong>{this.props.instaData.likes} likes </strong>
                </div>

                {/* <div className="increment-likes">
                    <PostLikes incrementLikes={this.incrementLikes}
                    likes={this.props.instaDatalikes} />
                </div> */}

                <div className="user-comments">
                    <CommentSection comments={this.props.instaData.comments} />
                </div>


            </div>
        );
    }

};


export default Post;