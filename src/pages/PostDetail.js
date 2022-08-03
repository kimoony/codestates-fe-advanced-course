import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PostItem from 'components/PostItem';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import PostComment from 'components/PostComment';
import NavTheme from 'components/NavTheme';


const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  transition: all ease-in-out .5s;
`

const DetailContainer = styled.div`
  border: none;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px ${(props) => props.borderColor};
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin: 25px 0px;
  background-color: ${(props) => props.bgColor};
  transition: all ease-in-out .5s;
`

const BackBtn = styled.button`
  align-self: flex-start;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: -20px;
  cursor: pointer;
  background-color: ${(props) => props.btnColor};
  color: ${(props) => props.btnTextColor};
  transition: all ease-in-out .5s;

  &:hover {
    background-color: ${(props) => props.accentColor};
    color: ${(props) => props.btnTextAccentColor};
    transition: all ease-in-out .5s;
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
  border-bottom: 5px solid;
  border-color: ${(props) => props.borderColor};
  margin-top: -10px;
  transition: all ease-in-out .5s;
`

const BottomContents = styled.div`
  padding: 20px;
`

function PostDetail({
  isLoading,
  posts,
  themeToggle,
  isDark,
  bgColor,
  btnTextColor,
  btnColor,
  textColor,
  borderColor,
  accentColor,
  btnTextAccentColor,
  subTextColor
}) {
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
    <Wrapper bgColor={bgColor}>
      <NavTheme
        isDark={isDark}
        themeToggle={themeToggle}
        bgColor={bgColor}
        btnTextColor={btnTextColor}
        btnColor={btnColor}
        accentColor={accentColor}
        btnTextAccentColor={btnTextAccentColor}
      />
      <DetailContainer borderColor={borderColor}>
        {
          isLoading ?
            <Loading>Loading...</Loading>
            : (
              <ContentsBox>
                <Link to="/">
                  <BackBtn
                    btnColor={btnColor}
                    btnTextColor={btnTextColor}
                    accentColor={accentColor}
                    btnTextAccentColor={btnTextAccentColor}
                  >
                    ← Back
                  </BackBtn>
                </Link>
                <TopContents borderColor={borderColor}>
                  <PostItem
                    targetPost={targetPost}
                    comments={comments}
                    showComments={showComments}
                    setShowComments={setShowComments}
                    borderColor={borderColor}
                    textColor={textColor}
                    accentColor={accentColor}
                    subTextColor={subTextColor}
                  />
                </TopContents>
                <BottomContents>
                  {
                    showComments ? null : (
                      <PostComment
                        comments={comments}
                        borderColor={borderColor}
                        textColor={textColor}
                        subTextColor={subTextColor}
                      />
                    )
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