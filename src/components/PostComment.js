import React from 'react'
import {
  CommnetsBox,
  CommentName,
  CommentBody,
} from 'style/components/PostComment.style';

function PostComment({
  comments,
  borderColor,
  textColor,
  subTextColor
}) {
  return (
    <div>
      {
        comments.map(comment => (
          <CommnetsBox key={comment.id} borderColor={borderColor}>
            <CommentName textColor={textColor}>{comment.name}</CommentName>
            <CommentBody subTextColor={subTextColor}>{comment.body}</CommentBody>
          </CommnetsBox>
        ))
      }
    </div>
  )
}

export default PostComment