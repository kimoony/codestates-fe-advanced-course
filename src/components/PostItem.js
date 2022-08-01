import React from 'react'

function PostItem({ targetPost, comments }) {
  // console.log(postItems)
  return (
    <div>
      <div>
        <h3>{targetPost.title}</h3>
        <div>작성자 {targetPost.userId}</div>
      </div>
      <div>
        <p>{targetPost.body}</p>
        <div>댓글 {comments.length}개</div>
      </div>
    </div>
  )
}

export default PostItem