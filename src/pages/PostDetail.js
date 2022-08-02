import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostItem from 'components/PostItem';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import PostComment from 'components/PostComment';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(227,227,227, .3);
`

const DetailContainer = styled.div`
  border: none;
  border-radius: 20px;
  box-shadow: 5px 5px 5px 1px gray;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 50px 0px;
  background-color: #fff;
`

const BackBtn = styled.button`
  align-self: flex-start;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: -20px;
  cursor: pointer;
  background-color: #2986F5;
  color: #fff;

  &:hover {
    background-color: #284CC6;
  }
`

const Loading = styled.div`
  font-size: 30px;
  font-weight: bold;
`

const ContentsBox = styled.div`
  width: 80%;
`

const TopContents = styled.div`
  padding: 20px;
  border-bottom: 5px solid #E3E3E3;
  margin-top: -10px;
`

const BottomContents = styled.div`
  padding: 20px;
`

function PostDetail({ isLoading, posts }) {
  const [targetPost, setTargetPost] = useState({});
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(true);

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
      <DetailContainer>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>

        </div>
        {
          isLoading ?
            <Loading>Loading...</Loading>
            : (
              <ContentsBox>
                <Link to="/">
                  <BackBtn>← Back</BackBtn>
                </Link>
                <TopContents>
                  <PostItem targetPost={targetPost} comments={comments} showComments={showComments} setShowComments={setShowComments} />
                </TopContents>
                <BottomContents>
                  {
                    showComments ? null : <PostComment comments={comments} />
                  }
                </BottomContents>
              </ContentsBox>
            )
        }
      </DetailContainer>
    </Wrapper>
  )
}

export default PostDetail