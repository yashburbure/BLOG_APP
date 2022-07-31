import React from 'react';
import {AppBar,Toolbar,Typography} from "@mui/material";

function Header() {
  return (
    <AppBar>
        <Toolbar>
            <Typography>BlogsApp</Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header;