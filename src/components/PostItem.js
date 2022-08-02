import React from 'react'
import styled from 'styled-components';

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #E3E3E3;
  padding: 0px 20px;
`

const Title = styled.h1`

`

const UserId = styled.div`
    align-self: flex-end;
    margin-bottom: 15px;
`

const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`

const Body = styled.p`
  font-size: 18px;
`

const CommentsLen = styled.div`
  align-self: flex-end;
  margin-bottom: 15px;
  font-size: 12px;
  color: gray;
  cursor: pointer;

  &:hover {
    color: #2986F5;
    font-weight: bold;
  }
`

function PostItem({ targetPost, comments, showComments, setShowComments }) {

  const onShow = () => {
    showComments ? setShowComments(false) : setShowComments(true)
  }

  return (
    <div>
      <TitleBox>
        <Title>{targetPost.title}</Title>
        <UserId>작성자 {targetPost.userId}</UserId>
      </TitleBox>
      <BodyBox>
        <Body>{targetPost.body}</Body>
        <CommentsLen onClick={onShow}>
          {
            showComments ? (
              <span>댓글 {comments.length}개 보이기</span>
            ) : (
              <span>댓글 {comments.length}개 숨기기</span>
            )
          }
        </CommentsLen>
      </BodyBox>
    </div>
  )
}

export default PostItem