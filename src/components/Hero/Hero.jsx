import React from 'react';
import { Box, Typography, Container, Button, useTheme, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import ProfilePic from '../../assets/profile.png';

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  mb: 2,
                  fontSize: { xs: '2.5rem', md: '4rem' },
                }}
              >
                Hi, I'm Hinesha Borad
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  mb: 4,
                  maxWidth: '600px',
                  fontSize: { xs: '1rem', md: '1.2rem' },
                }}
              >
                Hello! I'm Hinesha, an enthusiastic and quick-learning individual passionate about the world of web development. As a BCA student at Silver Oak University, I've been building a robust skillset in technologies like HTML, CSS, JavaScript, React.js, and various back-end languages. My portfolio reflects my journey in creating digital solutions, and I'm excited to connect and contribute my skills to a dynamic full-stack development team.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#ffffff' : 'black',
                      borderColor: theme.palette.mode === 'dark' ? '#ffffff' : 'black',
                      '&:hover': {
                        borderColor: theme.palette.mode === 'dark' ? '#ffffff' : 'black',
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.1)' 
                          : 'rgba(0, 0, 0, 0.1)',
                      },
                    }}
                    href="#contact"
                  >
                    Get in Touch
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      color: theme.palette.mode === 'dark' ? '#ffffff' : 'black',
                      borderColor: theme.palette.mode === 'dark' ? '#ffffff' : 'black',
                      '&:hover': {
                        borderColor: theme.palette.mode === 'dark' ? '#ffffff' : 'black',
                        backgroundColor: theme.palette.mode === 'dark' 
                          ? 'rgba(255, 255, 255, 0.1)' 
                          : 'rgba(0, 0, 0, 0.1)',
                      },
                    }}
                    href="/resume.pdf"
                    download="Hinesha_Borad_Resume.pdf"
                  >
                    Download Resume
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Box
                component="img"
                src={ProfilePic}
                alt="Hinesha Borad"
                sx={{
                  width: { xs: '280px', md: '400px' },
                  height: 'auto',
                  objectFit: 'contain',
                  filter: theme.palette.mode === 'dark' 
                    ? 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.2))'
                    : 'drop-shadow(0 0 20px rgba(100, 255, 218, 0.2))',
                  borderRadius: '8px',
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero; 