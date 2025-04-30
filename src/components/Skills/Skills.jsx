import React from 'react';
import { Box, Container, Typography, Paper, useTheme, Stack, Chip } from '@mui/material';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PeopleIcon from '@mui/icons-material/People';
import { motion } from 'framer-motion';

const technicalSkills = [
  'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery', 'C', 'C++', 'PHP', 'Python', 'Core Java', 'React.js'
];
const softSkills = [
  'Communication', 'Quick to Adapt', 'Time Management', 'Hard Working'
];

const Skills = () => {
  const theme = useTheme();
  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        minHeight: '60vh',
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
            Skills
          </Typography>
          <Stack direction={{ xs: 'column', md: 'row' }} spacing={4} justifyContent="center">
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4, flex: 1, background: theme.palette.background.paper }}>
              <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <EmojiObjectsIcon sx={{ color: theme.palette.text.primary }} />
                <Typography variant="h6" fontWeight={600} sx={{ color: theme.palette.text.primary }}>Technical Skills</Typography>
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {technicalSkills.map(skill => (
                  <Chip key={skill} label={skill} sx={{ color: theme.palette.text.primary, borderColor: theme.palette.text.primary }} variant="outlined" />
                ))}
              </Stack>
            </Paper>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4, flex: 1, background: theme.palette.background.paper }}>
              <Stack direction="row" alignItems="center" spacing={2} mb={2}>
                <PeopleIcon sx={{ color: theme.palette.text.primary }} />
                <Typography variant="h6" fontWeight={600} sx={{ color: theme.palette.text.primary }}>Soft Skills</Typography>
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {softSkills.map(skill => (
                  <Chip key={skill} label={skill} sx={{ color: theme.palette.text.primary, borderColor: theme.palette.text.primary }} variant="outlined" />
                ))}
              </Stack>
            </Paper>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Skills; 