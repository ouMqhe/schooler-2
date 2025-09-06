import React, { useEffect, useState } from 'react';
import ItemDetailsPopup from './ItemDetailsPopup';
// import { Button } from "@material-tailwind/react";
import {noteList} from './data/notesList';
import ImgMediaCard from './Card';
import Drawer from '@mui/material/Drawer';
import Notes from './Note';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import CardGridLayout from './CardGridLaout';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const items = noteList;

const ItemList = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [markdown, setMarkdown] = useState("");

  
  const handleItemClick = (item) => {
    setSelectedItem(item);
    console.log(item);
    fetch(`/notes/${item.description}/${item.name}`)
      .then((res) => res.text())
      .then(setMarkdown)
      .then(() => console.log(markdown));
    
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    toggleDrawer(false);
    setMarkdown("");
    setSelectedItem(null);
  };

    const [open, setOpen] = useState(false);
  
    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

  return (
    <div 
    sx={{ 
  backgroundColor: '#c0a4a4ff'
        }}
        >
        {/* <Box sx={{ flexGrow: 1  }}>
      <Grid >
        <Grid size={8}>
    <Item>
      <h1 className=" mb-4">Notes Listed</h1>
      <ul className="space-y-2">
        <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {items.map((item) => (
          <Grid size={4}>
            <Item>
          <ImgMediaCard
            key={item.id}
            md = {markdown}
            title={item.description}
            dscrption={item.name}
            linkto={() => handleItemClick(item)}
          />
          </Item>
  </Grid>
        ))}
        </Grid>
        </Box>
      </ul>
      </Item>
        </Grid>
        <Grid size={2}>
          <Item>size=4</Item>
        </Grid>
      </Grid>
    </Box>
     */}

    <CardGridLayout className="p-4 bg-gray-100 min-h-screen">

    {items.map((item) => (

          <ImgMediaCard
            key={item.id}
            md = {markdown}
            title={item.description}
            dscrption={item.name}
            linkto={() => handleItemClick(item)}
          />

        ))}
    </CardGridLayout>


      <Drawer open={open} onClose={toggleDrawer(false)}>
            <Notes markdown={markdown}/>
        <Button onClick={() => closePopup()}>Close Drawer</Button>

</Drawer>

</div>
  );
};

export default ItemList;