import React from 'react';
import styled from 'styled-components';

const ThemeBtn = styled.button`
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

function NavTheme({
  isDark,
  themeToggle,
  bgColor,
  btnTextColor,
  btnColor,
  accentColor,
  btnTextAccentColor
}) {


  return (
    <ThemeBtn
      onClick={themeToggle}
      bgColor={bgColor}
      btnTextColor={btnTextColor}
      btnColor={btnColor}
      accentColor={accentColor}
      btnTextAccentColor={btnTextAccentColor}
    >
      {isDark}
    </ThemeBtn>
  )
}

export default NavTheme