import React from 'react'
import {
  TitleBox,
  Title,
  UserId,
  BodyBox,
  Body,
  CommentsLen,
} from 'style/components/PostItem.style';

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