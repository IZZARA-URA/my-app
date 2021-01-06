import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import Home_AppBar from './Home_Appbar';

const useStyles = makeStyles((theme) => ({
  
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid >
        <Home_AppBar />
      </Grid>
    </div>
  );
}