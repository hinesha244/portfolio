import React from 'react';
import Nextpark from '../../assets/nextpark.png';
import Edusity from '../../assets/edusity.png';
import Digital from '../../assets/digital.png';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Chip,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
//import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const projects = [
  {
    title: 'Edusity Website',
    description: 'The webpage appears to be a personal portfolio site showcasing the developer\'s skills, projects, and contact details.',
    image: Edusity,
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
   // githubLink: 'https://github.com/hinesha244',
    liveLink: 'https://hinesha-myweb-react01.netlify.app/',
    date: 'September, 2024'
  },
  {
    title: 'Digital Learning',
    description: 'This tech project aims to improve education by providing personalized resources and innovative teaching tools for students and teachers.',
    image: Digital,
    technologies: ['React', 'Node.js', 'MongoDB'],
    //githubLink: 'https://github.com/hinesha244',
    liveLink: 'https://dattkrishna245.wixsite.com/sou--online/courses',
    date: 'April, 2024',
    CardContent
  },
  // {
  //   title: 'Portfolio Website',
  //   description: 'A personal portfolio website using HTML, CSS, JavaScript to showcase personal developments.',
  //   image: 'https://via.placeholder.com/400x200',
  //   technologies: ['HTML', 'CSS', 'JavaScript'],
  //   githubLink: 'https://github.com/hinesha244',
  //   liveLink: '#',
  //   date: 'November, 2024'
  // },
  {
    title: 'Parking Management System',
    description: 'A system to monitor and manage parking spaces in a parking lot, including booking and availability tracking.',
    image: Nextpark,
    technologies: ['React', 'Node.js', 'MongoDB'],
    // githubLink: 'https://github.com/hinesha244',
    liveLink: 'https://nextpark.vercel.app/',
    date: 'April, 2025'
  }
];

const Projects = () => {
  const theme = useTheme();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 1 }
      }
    ]
  };
  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        minHeight: '100vh',
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container>
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
            Projects
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 3,
              py: 2,
              px: 1,
              alignItems: 'center',
              '@media (max-width: 600px)': {
                gap: 2,
                px: 0,
              },
            }}
          >
            {projects.map((project, index) => (
              <Card
                key={project.title}
                sx={{
                  width: { xs: '100%', sm: 320 },
                  maxWidth: { xs: '100%', sm: 350 },
                  flex: { xs: '0 0 auto', sm: '0 0 auto' },
                  height: { xs: 'auto', sm: 420 },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  background: theme.palette.background.paper,
                  color: theme.palette.text.primary,
                  boxShadow: 3,
                  transition: '0.3s',
                  '&:hover': {
                    transform: { xs: 'none', sm: 'translateY(-10px)' },
                    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    objectFit: 'cover',
                    '@media (max-width: 600px)': {
                      height: 200,
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h3" 
                    sx={{ 
                      color: theme.palette.text.primary,
                      fontSize: { xs: '1.2rem', sm: '1.5rem' },
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    paragraph
                    sx={{ 
                      color: theme.palette.text.secondary,
                      fontSize: { xs: '0.875rem', sm: '1rem' },
                    }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        size="small"
                        sx={{ 
                          fontSize: { xs: '0.7rem', sm: '0.875rem' },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                  <Button
                    size="small"
                    startIcon={<LaunchIcon />}
                    href={project.liveLink}
                    target="_blank"
                    variant="outlined"
                    sx={{
                      borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      color: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                      '&:hover': {
                        borderColor: theme.palette.mode === 'light' ? '#1a1a1a' : '#ffffff',
                        backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
                      },
                      width: { xs: '100%', sm: 'auto' },
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects; 