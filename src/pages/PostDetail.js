import React, { useEffect, useState } from 'react';
import PostItem from 'components/PostItem';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import PostComment from 'components/PostComment';
import NavTheme from 'components/NavTheme';
import {
  Wrapper,
  DetailContainer,
  BackBtn,
  Loading,
  ContentsBox,
  TopContents,
  BottomContents,
} from 'style/pages/PostDetail.style';

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
  subTextColor,
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
      <DetailContainer>
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