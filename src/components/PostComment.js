import React from 'react'
import styled from 'styled-components';


const CommnetsBox = styled.div`
  padding: 0px 20px;
  border-bottom: 2px solid #E3E3E3;
`

const CommentName = styled.h4`
  margin-bottom: 5px;
`

const CommentBody = styled.p`
  margin-top: 0px;
  color: gray;
`

function PostComment({ comments }) {
  return (
    <div>
      {
        comments.map(comment => (
          <CommnetsBox key={comment.id}>
            <CommentName>{comment.name}</CommentName>
            <CommentBody>{comment.body}</CommentBody>
          </CommnetsBox>
        ))
      }
    </div>
  )
}

export default PostComment