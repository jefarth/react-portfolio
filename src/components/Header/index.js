import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ mx: 2 }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Jeremiah Farthing
          </Typography>
          <Button color="inherit">.home()</Button>
          <Button color="inherit">.aboutMe()</Button>
          <Button color="inherit">.projects()</Button>
          <Button color="inherit">.contactMe()</Button>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="linkedin"
            sx={{ mr: 2 }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="github"
            sx={{ mr: 2 }}
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
