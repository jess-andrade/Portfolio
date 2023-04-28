import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MyCard() {
  return (
    <Card sx={{ maxWidth: 1000, bgcolor: '#faf1d0' }}>
      <CardMedia
        sx={{ height: 140, bgcolor: '#faf1d0' }}
        image="../../public/jess2.png"
        title="jess"
      />
      <CardContent sx={{ bgcolor: 'faf1d0' }}>
        <Typography gutterBottom variant="h5" component="div">
          Jessica Andrade
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}