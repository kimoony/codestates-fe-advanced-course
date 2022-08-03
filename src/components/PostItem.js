import React from 'react'
import styled from 'styled-components';

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid;
  border-color: ${(props) => props.borderColor};
  padding: 20px;
  transition: all ease-in-out .5s;
`

const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`

const UserId = styled.div`
  align-self: flex-end;
  margin-bottom: 15px;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`

const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Body = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`

const CommentsLen = styled.div`
  align-self: flex-end;
  margin-bottom: 15px;
  font-size: 12px;
  color: ${(props) => props.subTextColor};
  cursor: pointer;
  transition: all ease-in-out .5s;

  &:hover {
    color: ${(props) => props.accentColor};
    font-weight: bold;
    transition: all ease-in-out .5s;
  }
`

function PostItem({
  targetPost,
  comments,
  showComments,
  setShowComments,
  accentColor,
  borderColor,
  textColor,
  subTextColor
}) {

  const onShow = () => {
    showComments ? setShowComments(false) : setShowComments(true)
  }

  return (
    <div>
      <TitleBox borderColor={borderColor}>
        <Title textColor={textColor}>{targetPost.title}</Title>
        <UserId textColor={textColor}>작성자 {targetPost.userId}</UserId>
      </TitleBox>
      <BodyBox>
        <Body textColor={textColor}>{targetPost.body}</Body>
        <CommentsLen
          onClick={onShow}
          subTextColor={subTextColor}
          accentColor={accentColor}
        >
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