import { Box, Divider, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';
import { useState } from 'react';
import { Home, Person, People, Message, Settings } from '@mui/icons-material';
import { pink } from '@mui/material/colors';

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      bgcolor="background.default"
      color="text.primary"
      flex={1}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box m={2} bgcolor="background.paper" p={4} sx={{ height: '100vh'}}>
        <Typography variant="h6" fontWeight={500}>
          App Menu
        </Typography>
        <Divider sx={{my:1}}  />
        <List component="nav" aria-label="main mailbox folders">
          <ListItemButton
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <Message />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItemButton>

          <ListItemButton
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
