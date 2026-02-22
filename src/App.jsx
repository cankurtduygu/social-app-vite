import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Box from '@mui/material/Box';
import { createTheme, Stack, ThemeProvider } from '@mui/material';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light' && {
        background: {
          default: '#f6f7fb',
          paper: '#ffffffee',
        },
      }),
      ...(mode === 'dark' && {
        background: {
          default: '#1B1C3A',
          paper: '#2a2c4f',
        },
      }),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar setMode={setMode} mode={mode} />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
