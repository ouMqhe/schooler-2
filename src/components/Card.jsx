import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import ItemDetailsPopup from './ItemDetailsPopup';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import Notes from './Note';





export default function ImgMediaCard({title, md, dscrption, linkto}) {
  
  const [open, setOpen] = useState(false);
  const [markdown, setMarkdown] = useState("");

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
      fetch(`/notes/${title}/${title}.md`)
      .then((res) => res.text())
      .then(setMarkdown)
      .then(() => console.log(title))
      // .then(() => console.log(markdown));
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );



  return (
    <>
    <Card sx={{ maxWidth: 345,
          backgroundColor: '#bec4d1ff',

     }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/deflt.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {dscrption} ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small"
        onClick={toggleDrawer(true)}
        >Read</Button>
        <Button size="small" 
        onClick={linkto}
        >Learn More</Button>
      </CardActions>
    </Card>
    <Drawer open={open} 
    anchor='bottom'
    onClose={toggleDrawer(false)}
    
    >
  {/* {DrawerList} */}
        {/* <ItemDetailsPopup markdown={md} title={title}  /> */}
            <Notes markdown={markdown}/>
          
</Drawer>
    </>
  );
}
