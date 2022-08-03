import React from 'react';
import { ThemeBtn } from 'style/components/NavTheme.style';

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