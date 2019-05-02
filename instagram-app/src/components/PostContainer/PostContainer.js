import React from 'react';
import './PostContainer.css';

import Post from './Post';

import DummyData from '../DummyData/DummyData';

// import CommentSection from '../components/'


const PostContainer = props => {
    return (
        //Main Container div for Post Container
        <div className="post-container-section">

            <div className="post">
                <Post dummyData={props.dummyData} />

                {props.dummyData.map(dummyDataFromMap => {
                    return <DummyData dummyData={dummyDataFromMap} />
                })}

            </div>

        </div>

        //Container div for Post Container Ends Here
    );
};



export default PostContainer;