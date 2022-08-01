import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostItem from 'components/PostItem';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import PostComment from 'components/PostComment';


const Wrapper = styled.div`
  border: 1px solid black;
`

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
    <Wrapper>
      {
        isLoading ?
          <Loading>Loading...</Loading>
          : (
            <DetailContainer>
              <div>
                <PostItem targetPost={targetPost} comments={comments} />
              </div>
              <div>
                <PostComment comments={comments} />
              </div>
            </DetailContainer>
          )
      }
    </Wrapper>
  )
}

export default PostDetail