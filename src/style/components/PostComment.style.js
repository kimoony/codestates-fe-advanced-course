import styled from 'styled-components';


export const CommnetsBox = styled.div`
  padding: 20px;
  border-bottom: 2px solid;
  border-color: ${(props) => props.borderColor};
  transition: all ease-in-out .5s;
`

export const CommentName = styled.h4`
  margin-bottom: 5px;
  font-weight: bold;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`

export const CommentBody = styled.p`
  margin-top: 0px;
  color: ${(props) => props.subTextColor};
  transition: all ease-in-out .5s;
`