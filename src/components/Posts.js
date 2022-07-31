import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const ListBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #E3E3E3;

  :first-child {
    border-top: 5px solid #E3E3E3;
  }
`

const List = styled.li`
  list-style: none;
  cursor: pointer;
`

const Title = styled.h3`
  font-size: 18px;
`

function Posts({ posts }) {

  const navigate = useNavigate();

  return (
    <ul>
      {
        posts.map((post) => (
          <ListBox key={post.id}>
            <List onClick={() => navigate(`/post/${post.id}`)}>
              <Title>{post.title}</Title>
            </List>
            <div>작성자 {post.userId}</div>
          </ListBox>
        ))
      }
    </ul >
  )
}

export default Posts