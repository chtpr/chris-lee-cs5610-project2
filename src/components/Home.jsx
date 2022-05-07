import { Typography } from '@mui/material';
import React from 'react';


function Home() {
  
    return (
      <div className="Home">
          <br></br>
          <Typography variant='h3'>Welcome to Cordle! 
          </Typography>
          <br></br>
          <Typography> A Wordle clone that allows you to play on 
              three difficulties: easy, medium, or hard.</Typography>
              <Typography>Have fun playing!</Typography>
      </div>
    );
  }
  
  export default Home