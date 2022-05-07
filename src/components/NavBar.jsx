import React from "react";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { Link } from "react-router-dom";

const theme = createTheme({
    palette: {
      primary: {
        main: green[400],
      },
    }
  });

export default function NavBar() {
    return (
        <ThemeProvider theme={theme}>
        <AppBar  position='static' >
            <Toolbar elevation={0} sx={{
            display: "flex",
            justifyContent: "space-between"     
            }} >
                 <Typography>
                <Button sx={{ fontSize: '20px' }}disableElevation={true} variant="contained" to={"/home"} component={Link}>
                    Cordle
                    </Button>
                    
                    <Button disableElevation={true} variant="contained" to={"/play/easy"} component={Link}>
                     Easy
                    </Button>
                    <Button disableElevation={true} variant="contained" to={"/play/medium"} component={Link}>
                     Medium
                    </Button>
                    <Button disableElevation={true} variant="contained" to={"/play/hard"} component={Link}>
                     Hard
                    </Button>
                </Typography>
                <Typography>
                
                <Button disableElevation={true} variant="contained" to={"/help"} component={Link}>
                    Rules
                    </Button>
                </Typography>
            </Toolbar>
        </AppBar>
        </ThemeProvider>
        )
    }    