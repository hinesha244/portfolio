import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const theme = useTheme();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(formData);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              textAlign: 'center',
              mb: 6,
              fontWeight: 'bold',
              color: theme.palette.text.primary,
            }}
          >
            Get In Touch
          </Typography>
          <Paper 
            elevation={3} 
            sx={{ 
              p: { xs: 3, sm: 4 },
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            <form onSubmit={handleSubmit}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3,
                width: '100%',
                maxWidth: '500px',
                margin: '0 auto',
              }}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                    },
                  }}
                />
                <TextField
                  required
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                    },
                  }}
                />
                <TextField
                  required
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  sx={{
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                    },
                  }}
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    variant="outlined"
                    size="large"
                    endIcon={<SendIcon />}
                    sx={{
                      borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      color: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      '&:hover': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                        backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
                      },
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      width: '100%',
                      py: 1.5,
                    }}
                  >
                    Send Message
                  </Button>
                </motion.div>
              </Box>
            </form>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact; 