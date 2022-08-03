import { atom } from 'recoil';

export const lightState = atom({
  key: 'light',
  default: {
    mode: 'light',
    bgColor: '#fff',
    textColor: '#000',
    subTextColor: 'gray',
    borderColor: '#E3E3E3',
    btnColor: '#4A4B4D',
    btnTextColor: '#fff',
    accentColor: "#2986F5",
    btnTextAccentColor: '#fff',
    pageBtnColor: '#2986F5',
    pageTextColor: '#000'
  }
})

export const darkState = atom({
  key: 'dark',
  default: {
    mode: 'dark',
    bgColor: '#4A4B4D',
    textColor: '#E3E3E3',
    subTextColor: 'lightgray',
    borderColor: '#63E6BE',
    btnColor: '#E3E3E3',
    btnTextColor: '#000',
    accentColor: "#63E6BE",
    btnTextAccentColor: '#000',
    pageBtnColor: '#63E6BE',
    pageTextColor: '#000'
  }
})

export const themeState = atom({
  key: 'themeState',
  default: lightState
})

