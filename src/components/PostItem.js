import React from 'react';
import PropTypes from 'prop-types';

function PostHeader ({author, date}){
  return(
    <div className="postHeader">
      <img className="avatar" src={author.avatar} />
      <div className="details">
        <span>{author.name}</span>
        <span>{date}</span>
      </div>
    </div>
  );
}

function PostComments({ comments }){
  return(
    <div className="postComment">
      <div className="divider" />
        { comments.map( comment => (
          <div key={comment.id} className="comment">
            <img className="avatar" src={comment.author.avatar} alt="Avatar do comentarista"/>
            <p>
              <span>{comment.author.name}</span>
              {comment.content}
            </p>
          </div>
        ))}
      </div>
  );
}

function PostItem({author, date, content, comments}){
  return(
    <div className="post">
      <PostHeader author={author} date={date} content={content}/>
      <p className="postContent">{content}</p>
      <PostComments comments={comments}/>
    </div>
  );
}


PostItem.propTypes = {
  author: PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
}
export default PostItem;