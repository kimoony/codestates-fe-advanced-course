import React from 'react'
import styled from 'styled-components';


const CommnetsBox = styled.div`
  padding: 20px;
  border-bottom: 2px solid;
  border-color: ${(props) => props.borderColor};
  transition: all ease-in-out .5s;
`

const CommentName = styled.h4`
  margin-bottom: 5px;
  font-weight: bold;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`

const CommentBody = styled.p`
  margin-top: 0px;
  color: ${(props) => props.subTextColor};
  transition: all ease-in-out .5s;
`

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