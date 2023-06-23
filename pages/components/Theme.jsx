import {createTheme} from "@mui/material";
import React from "react";

export const theme1 = createTheme({
  palette: {
    primary: {
      main: '#5864f2',
    },
    secondary: {
      main: '#4e5058',
    },
    t3: {
      main: '#f2f3f5',
    },
    error: {
      main: '#ff0500',
    },
    background: {
      default: '#313338',
      paper: '#2b2d31',
    },
    text: {
      default:'#f2f3f5',
      primary: '#f2f3f5',
      secondary: '#e0e0e0',
      disabled: '#bdbdbd',
      hint: '#bdbdbd',
    },
    divider: '#616161',
  },
  typography: {
    fontFamily: 'Noto Sans Thai Looped',
    color:'#f5f5f5'
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#313338',
        color: '#fff',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
});
export default function Theme(){
  return (
    <React.Fragment>
    </React.Fragment>
  )
}