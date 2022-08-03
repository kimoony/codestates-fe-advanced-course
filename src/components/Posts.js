import React from 'react'
import { useNavigate } from 'react-router-dom';
import {
  ListBox,
  List,
  Title,
  UserId,
} from 'style/components/Posts.style';

function Posts({ posts, textColor, borderColor, accentColor }) {

  const navigate = useNavigate();

  return (
    <ul>
      {
        posts.map((post) => (
          <ListBox key={post.id} borderColor={borderColor}>
            <List onClick={() => navigate(`/post/${post.id}`)}>
              <Title textColor={textColor} accentColor={accentColor}>{post.title}</Title>
            </List>
            <UserId textColor={textColor}>작성자 {post.userId}</UserId>
          </ListBox>
        ))
      }
    </ul >
  )
}

export default Posts