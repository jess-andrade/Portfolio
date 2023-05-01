import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { AppBar } from '@mui/material';

import Image from 'next/image';
import star from '../../public/star.png'
import styles from '../styles/IconTabs.module.css'

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(newValue)
  };

  return (
    <AppBar style={{
      position: "fixed",
      backgroundColor: '#fbefc9',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '10px'
    }}>
      {/* <Image src={star} alt='star' className={styles.star} /> */}
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" sx={{ maxWidth: '60vw' }}>
        <Tab icon={<HomeIcon />} href='#home' />
        <Tab icon={<PersonPinIcon />} href='#about' />
        <Tab icon={<CollectionsBookmarkIcon />} href='#projects' />

      </Tabs>
    </AppBar>

  );
}