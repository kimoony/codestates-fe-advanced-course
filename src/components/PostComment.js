import React from 'react'

function PostComment({ comments }) {
  return (
    <div>
      {
        comments.map(comment => (
          <div key={comment.id}>
            <ul>
              <li>
                <div>{comment.name}</div>
                <p>{comment.body}</p>
              </li>
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default PostComment