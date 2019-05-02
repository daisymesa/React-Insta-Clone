import React from 'react';
import './PostContainer.css';

import DummyData from '../DummyData/DummyData';

// import CommentSection from '../components/'


const PostContainer = props => {
    return (
        //Main Container div for Post Container
        <div className="post-container-section">


            <div className="post-header">

                <div className="user-profile-picture">
                    <img src={props.dummyData.thumbnailUrl} alt="User Thumbnail" />
                </div>

                <div className="username-section">
                    <h3>{props.dummyData.username}</h3>
                </div>

            </div>


            <div className="post-main-image">
                <img src={props.dummyData.imageUrl} alt="User Post" />
            </div>


            <div className="interact-icons">

                <div className="icon">

                </div>

                <div className="icon">

                </div>

            </div>

            <div className="comment-section">

            </div>


        </div>
        //Container div for Post Container Ends Here
    );
};



export default Post;