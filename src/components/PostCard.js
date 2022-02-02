import React from 'react';


const PostCard = (props) => {
    const post = props.post
    const author = props.post.user
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{author.first_name} {author.last_name}</h6>
                <p className="card-text">{post.body}</p>
                <button className="btn btn-outline-success">Go Somewhere</button>
            </div>
        </div>
    )
}

export default PostCard;