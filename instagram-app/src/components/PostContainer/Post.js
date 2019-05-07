import React from 'react';
import './Post.css';


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

                <div className="icon">

                </div>

                <div className="icon">

                </div>

            </div>
        </div>
    );
};


export default Post;