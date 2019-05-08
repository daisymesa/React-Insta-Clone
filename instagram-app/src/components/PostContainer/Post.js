import React from 'react';
import './Post.css';

import CommentSection from '../CommentSection/CommentSection';


const Post = props => {
    return (
        <div className="post-section">


            <div className="post-header">
                <div className="user-profile-picture">
                    <img src={props.instaData.thumbnailUrl} alt="User Thumbnail" />
                </div>
                <div className="username-section">
                    <h3>{props.instaData.username}</h3>
                </div>
            </div>


            <div className="post-main-image">
                <img src={props.instaData.imageUrl} alt="User Post" />
            </div>


            <div className="interact-icons">
                <div className="icon-heart">
                    <img src="https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png" alt="Heart Icon" />
                </div>
                <div className="icon">
                    <img src="https://banner2.kisspng.com/20180410/gkq/kisspng-computer-icons-download-internet-forum-comment-5acc485b875552.7926656815233373075543.jpg" alt="Comment Bubble Icon" />
                </div>
            </div>


            <div className="post-likes">
                <strong>{props.instaData.likes} likes </strong>
            </div>


            <div className="user-comments">
                <CommentSection comments={props.instaData.comments} />
            </div>

            <div className="new-comments">

                <imput
                    name="text"
                    value={props.commentText}
                    onChange={props.commentHandler} />

            </div>
        </div>
    );
};


export default Post;