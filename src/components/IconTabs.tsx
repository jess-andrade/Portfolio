import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { AppBar } from '@mui/material';

import Image from 'next/image';
import SelectLanguage from './SelectLanguage';

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  // const useEventListener = (
  //   target: EventTarget | null,
  //   event: string,
  //   listener: EventListenerOrEventListenerObject,
  //   trigger = true
  // ): void => {
  //   React.useEffect(() => {
  //     const t = target || window
  //     t.addEventListener(event, listener);
  //     trigger && t.dispatchEvent(new Event(event));
  //     return () => t.removeEventListener(event, listener);
  //   });
  // };

  // useEventListener(null, 'scroll', () => {
  //   const value = Math.floor(window.scrollY / (0.8 * window.innerHeight))
  //   setValue(Math.floor(window.scrollY / (25.6 * window.screenY)))
  //   console.log(value)
  //   console.log(window.scrollY)
  // });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <AppBar style={{
      position: "fixed",
      backgroundColor: '#F1F1F1',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '10px'
    }}>

      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example" sx={{ maxWidth: '150vw' }} TabIndicatorProps={{
        style: {
          backgroundColor: "white"
        }
      }}>
        <Tab icon={<HomeIcon />} href='#home' />
        <Tab icon={<PersonPinIcon />} href='#about' />
        <Tab icon={<CollectionsBookmarkIcon />} href='#projects' />
        <Tab icon={<AlternateEmailIcon />} href='#contact' />

      </Tabs>
    </AppBar>

  );
}