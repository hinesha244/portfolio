import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  useTheme,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const theme = useTheme();

  // EmailJS configuration
  const EMAILJS_CONFIG = {
    serviceId: 'service_r9da72p', // Replace with your new service ID
    templateId: 'template_4kwnd4s', // Replace with your new template ID
    publicKey: 'b_3i3PduwUXlQIEG5', // Replace with your new public key
  };

  // Initialize EmailJS when component mounts
  useEffect(() => {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Log the data being sent
      console.log('Sending form data:', {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      const result = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        }
      );

      console.log('EmailJS Response:', result);

      if (result.status === 200 || result.text === 'OK') {
        setSnackbarMessage('Message sent successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        resetForm();
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('Detailed EmailJS Error:', error);
      console.error('Error details:', {
        serviceId: EMAILJS_CONFIG.serviceId,
        templateId: EMAILJS_CONFIG.templateId,
        publicKey: EMAILJS_CONFIG.publicKey,
        formData
      });
      setSnackbarMessage('Failed to send message. Please try again later.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
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
                  disabled={isSubmitting}
                  sx={{
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      color: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      '&.Mui-focused': {
                        color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      color: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      '&:hover': {
                        color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
                      },
                      '&:focus': {
                        color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
                      },
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
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
                  disabled={isSubmitting}
                  sx={{
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      color: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      '&.Mui-focused': {
                        color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      color: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      '&:hover': {
                        color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
                      },
                      '&:focus': {
                        color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
                      },
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
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
                  disabled={isSubmitting}
                  sx={{
                    '& .MuiInputLabel-root': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      color: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      '&.Mui-focused': {
                        color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
                      },
                    },
                    '& .MuiInputBase-input': {
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                      color: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      '&:hover': {
                        color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
                      },
                      '&:focus': {
                        color: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
                      },
                    },
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                      '&:hover fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.mode === 'light' ? '#000000' : '#ffffff',
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
                    endIcon={isSubmitting ? <CircularProgress size={20} /> : <SendIcon />}
                    disabled={isSubmitting}
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
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </motion.div>
              </Box>
            </form>
          </Paper>
        </motion.div>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 