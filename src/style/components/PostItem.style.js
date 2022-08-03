import styled from 'styled-components';

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid;
  border-color: ${(props) => props.borderColor};
  padding: 20px;
  transition: all ease-in-out .5s;
`

export const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`

export const UserId = styled.div`
  align-self: flex-end;
  margin-bottom: 15px;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`

export const BodyBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

export const Body = styled.p`
  font-size: 18px;
  margin-bottom: 15px;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`

export const CommentsLen = styled.div`
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