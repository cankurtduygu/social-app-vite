import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import { messages } from '../helper/data';

const CommentarListComp = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 1 }}>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <Typography variant="h6" fontWeight={100}>
          Recent Messages
        </Typography>
        {messages.map((message, index) => (
          <React.Fragment key={message.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={message.name} src={message.avatar} />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: 'text.primary', display: 'block' }}
                    >
                      {message.name}
                    </Typography>
                    {`${message.message} — ${message.timeAgo}`}
                  </React.Fragment>
                }
              />
            </ListItem>
            {index < messages.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default CommentarListComp;
