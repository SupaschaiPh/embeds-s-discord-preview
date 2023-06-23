import {Grid,ThemeProvider} from '@mui/material';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Preview from './Preview';
import { theme1 } from './Theme';

export default function Layout({children}){
  return (
    <React.Fragment>
      <ThemeProvider theme={theme1}>
        <Navbar/>
        <Grid bgcolor="#313338" pt={9} container columns={2} minHeight="100svh">
          <Grid item xs={2} md={1} >
            <Preview/>
          </Grid>
          <Grid item xs={2} md={1} >
            {children}
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  )
}