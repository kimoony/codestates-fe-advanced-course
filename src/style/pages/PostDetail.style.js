import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 160vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  transition: all ease-in-out .5s;
`

export const DetailContainer = styled.div`
  border: none;
  border-radius: 20px;
  box-shadow: 3px 3px 3px 3px gray;
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

export const BackBtn = styled.button`
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

export const Loading = styled.div`
  font-size: 30px;
  font-weight: bold;
`

export const ContentsBox = styled.div`
  width: 80%;
  height: 100%;
`

export const TopContents = styled.div`
  padding: 20px;
  border-bottom: 5px solid;
  border-color: ${(props) => props.borderColor};
  margin-top: -10px;
  transition: all ease-in-out .5s;
`

export const BottomContents = styled.div`
  padding: 20px;
`