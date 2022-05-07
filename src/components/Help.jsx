import { Typography } from '@mui/material';
import React from 'react';

function Help() {

    return (
      <div className="Help">
        <br></br>
        <Typography variant='h3'>Cordle Rules
        </Typography>
        <br></br>
        <Typography>Easy: 5 letter words, 7 tries</Typography>
        <Typography>Medium: 6 letter words, 6 tries</Typography>
        <Typography>Hard: 7 letter words, 5 tries</Typography>
        <br></br>
        <Typography> Using a keyboard, try guess a word (length and number of tries dependent on difficulty) 
        in as few attempts as possible!</Typography>
        <Typography>When the letter is in the word and in the correct position,
        that tile will show green. </Typography>
        <Typography>When the letter is in the word but NOT in the correct position,
        that tile will show yellow. </Typography>
        <Typography>When the letter is NOT in the word at all,
            that tile will show grey.
        </Typography>
      </div>
    );
  }
  
  export default Help