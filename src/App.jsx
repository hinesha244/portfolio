import React, { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
// import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      main: '#64ffda',
    },
    secondary: {
      main: '#1a1a1a',
    },
    background: {
      default: mode === 'dark' ? '#232323' : '#fff',
      paper: mode === 'dark' ? '#2c2c2c' : '#fff',
    },
    text: {
      primary: mode === 'dark' ? '#fff' : '#1a1a1a',
      secondary: mode === 'dark' ? '#bdbdbd' : '#666',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

function App() {
  const [mode, setMode] = useState('light');
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const toggleTheme = () => setMode((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar mode={mode} toggleTheme={toggleTheme} />
        <main style={{ marginTop: '64px', flex: 1 }}>
          <Hero />
          {/* <About /> */}
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
