import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Notes from './Note';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';


const FloatingCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  boxShadow: `
    
0 5px 5px rgba(0, 0, 0, 0.4),
      0 10px 10px rgba(0, 0, 0, 0.3),
      0 15px 15px rgba(0, 0, 0, 0.2),
      0 20px 20px rgba(0, 0, 0, 0.1),
      0 25px 25px rgba(0, 0, 0, 0.05),
      0 160px 128px rgba(0, 0, 0, 0.1)

  `,
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `
      
  0 2.8px 2.2px rgba(0, 0, 0, 0.02),
    0 6.7px 5.3px rgba(0, 0, 0, 0.028),
    0 12.5px 10px rgba(0, 0, 0, 0.035),
    0 22.3px 17.9px rgba(0, 0, 0, 0.042),
    0 41.8px 33.4px rgba(0, 0, 0, 0.05),
    0 100px 80px rgba(0, 0, 0, 0.07)
      `,
  },
}));

export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

export default function ImgMediaCard({title, md, dscrption}) {
  
  const [open, setOpen] = useState(false);
  const [markdown, setMarkdown] = useState("");
  const slug = generateSlug(title);

  const toggleDrawer = (slug) => () => {
    // setOpen(newOpen);
    //   fetch(`/notes/${title}/${title}.md`)
    //   .then((res) => res.text())
    //   .then(setMarkdown)
    //   .then(() => console.log(title))
    //   // .then(() => console.log(markdown));
    window.location.href = `/notes/${slug}`;
  };


  return (
    <>
    <FloatingCard sx={{ maxWidth: 345,
          backgroundColor: '#ecc1d27e',

     }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/deflt.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          These notes are for {dscrption}. Check out previous notes to learn more.
        </Typography>
      </CardContent>
      <CardActions>
        <Button  size="small"
        onClick={toggleDrawer(slug)}
        // to={`/notes/${slug}`}
        fullWidth
        >Read</Button>
        
      </CardActions>
    </FloatingCard>
    {/* <Drawer open={open} 
    anchor='bottom'
    onClose={toggleDrawer(false)}
    
    >            <Notes markdown={markdown}
            linkto ={toggleDrawer(false)}
            />
          
</Drawer> */}
    </>
  );
}
