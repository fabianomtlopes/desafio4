import React from 'react';
import PropTypes from 'prop-types';

function PostHeader ({author}){
  return(
    <div className="postHeader">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>Teste2</span>
      </div>
    </div>
  );
}

function PostItem({author}){
  return(
    <div className="post">
      <PostHeader author={author}/>
    </div>
  );
}


PostItem.PropTypes = {
  author: PropTypes.string.isRequired,
}
export default PostItem;