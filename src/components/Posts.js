import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid;
  border-color: ${(props) => props.borderColor};
  transition: all ease-in-out .5s;

  &:first-child {
    border-top: 5px solid;
    border-color: ${(props) => props.borderColor};
  }
`

const List = styled.li`
  list-style: none;
  cursor: pointer;
`

const Title = styled.h3`
  font-size: 18px;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;

  &:hover {
    color: ${(props) => props.accentColor};
    font-weight: bold;
  }
`

const UserId = styled.div`
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`

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