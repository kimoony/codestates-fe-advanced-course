import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostItem from 'components/PostItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Loading = styled.div`
  font-size: 30px;
  font-weight: bold;
`

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom: 1px solid #E3E3E3;
  `



function PostDetail({ isLoading, posts }) {
  const [targetPost, setTargetPost] = useState({});
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    if (posts.length > 0) {
      const targetItem = posts.find((post) => parseInt(post.id) === parseInt(id));
      if (targetItem) {
        setTargetPost(targetItem);
      }
    }
  }, [id, posts]);

  useEffect(() => {
    const fetchCmData = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setComments(res.data.slice(0, 5));
    }
    fetchCmData();
  }, []);


  return (
    <div>
      {
        isLoading ?
          <Loading>Loading...</Loading>
          : (
            <DetailContainer>
              <div>
                <h3>{targetPost.title}</h3>
                <div>작성자 {targetPost.userId}</div>
              </div>
              <div>
                <p>{targetPost.body}</p>
                <div>댓글 {comments.length}개</div>
              </div>
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
            </DetailContainer>
          )
      }
    </div>
  )
}

export default PostDetail