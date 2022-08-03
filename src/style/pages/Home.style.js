import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  transition: all ease-in-out .5s;
`

export const Title = styled.h1`
  margin-top: 10px;
  margin-bottom: 35px;
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.textColor};
  transition: all ease-in-out .5s;
`

export const ListContainer = styled.div`
  width: 90vw;
`
export const Loading = styled.div`
  font-size: 30px;
  font-weight: bold;
`