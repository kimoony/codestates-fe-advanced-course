import styled from 'styled-components';

export const ThemeBtn = styled.button`
  margin-top: 30px;
  margin-right: 5%;
  padding: 10px 15px;
  align-self: flex-end;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => props.btnColor};
  color: ${(props) => props.btnTextColor};
  transition: all ease-in-out .5s;

  
  &:hover {
    background-color: ${(props) => props.accentColor};
    color: ${(props) => props.btnTextAccentColor};
  }
`