import React from 'react'
import PropTypes from 'prop-types'
import CommentSection from '../CommentSection/CommentSection';
import './post.css';


function PostContainer(props) {












    return (
        <div>
            {props.dummyData.map(data =>(
                <div key={data.id} data={data} className="post">
                    <div className="postHeader">
                    <img className="postThumb" src={data.thumbnailUrl} alt={data.username}/><h4>{data.username}</h4>
                    </div>
                <img src={data.imageUrl} alt={data.username}  />
                <CommentSection/>
                
            </div>
            ))}
        </div>
    )
}

PostContainer.defaultProps = {
dummyData: []

}

PostContainer.propTypes = {

dummyData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    text: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string,
    likes: PropTypes.number,
    timestamp: PropTypes.string,
    comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    username: PropTypes.string,
    text: PropTypes.string

    })),

}))
}

export default PostContainer;

