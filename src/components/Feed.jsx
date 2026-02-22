import { Box, Checkbox } from '@mui/material';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { useState } from 'react';
import { mockPosts } from '../helper/data';

const Feed = () => {
  const [fakerData, setfakerData] = useState(mockPosts);

  return (
    <Box bgcolor="background.paper" color="text.primary" flex={4} p={2}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {fakerData.map((post) => (
          <Card key={post.id}>
            <CardHeader
              avatar={
                <Avatar src={post.authorAvatar}>{post.authorName[0]}</Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.authorName}
              subheader={post.timestamp}
            />
            <CardMedia
              component="img"
              height="194"
              image={post.image}
              alt={post.authorName}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {post.content}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  checked={post.liked}
                  onChange={() => {
                    setfakerData((prev) =>
                      prev.map((p) =>
                        p.id === post.id
                          ? {
                              ...p,
                              liked: !p.liked,
                              likes: p.liked ? p.likes - 1 : p.likes + 1,
                            }
                          : p
                      )
                    );
                  }}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{ color: 'red' }} />}
                />
              </IconButton>
              <Typography variant="body2" sx={{ mr: 1 }}>
                {post.likes}
              </Typography>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Feed;
