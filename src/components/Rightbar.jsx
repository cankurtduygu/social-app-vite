import { Box, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { messages } from '../helper/data';
import CommentarListComp from './CommentarListComp';

const Rightbar = () => {
  return (
    <Box
      bgcolor="background.paper"
      color="text.primary"
      flex={2}
      p={2}
      sx={{ display: { xs: 'none', sm: 'block' } }}
    >
      <Box position="sticky" top={0} sx={{ width: '100%', maxWidth: 360 }}>
        <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: 1 }}>
          <Typography variant="h6" fontWeight={100}>
            Online Friends
          </Typography>
          <AvatarGroup max={4}>
            {messages.map((friend) => (
              <Avatar key={friend.id} alt={friend.name} src={friend.avatar} />
            ))}
          </AvatarGroup>
        </Box>
        <Box sx={{ mt: 2 }}>
          <CommentarListComp />
        </Box>
      </Box>
    </Box>
  );
};

export default Rightbar;
