import React from 'react';
import { Box, Container, Typography, IconButton, Stack, useTheme } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="sm">
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          alignItems="center"
          mb={2}
        >
          <IconButton
            href="https://github.com/hinesha244"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.text.primary }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://linkedin.com/in/hinesha112"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.text.primary }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            href="https://wa.me/917600286656"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.text.primary }}
          >
            <WhatsAppIcon />
          </IconButton>
          {/* <IconButton
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: theme.palette.text.primary }}
          >
            <TwitterIcon />
          </IconButton> */}
        </Stack>
        <Typography variant="body2" color="inherit" align="center" sx={{ mb: 1 }}>
          Email: boradhinesha244@gmail.com
        </Typography>
        {/* <Typography variant="body2" color="inherit" align="center" sx={{ mb: 1 }}>
          Phone: 7600286656
        </Typography> */}
        <Typography variant="body2" color="inherit" align="center" sx={{ mb: 1 }}>
          Location: Ahmedabad, Gujarat
        </Typography>
        <Typography variant="body2" color="inherit" align="center">
          © {new Date().getFullYear()} Hinesha Borad. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 