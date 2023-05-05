import styles from '../styles/Contact.module.css'
import MyButton from './MyButton'
import CopyButton from './CopyButton'

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Alert } from '@mui/material';
import { useState } from 'react';

export default function Contact() {
  const [alert, setAlert] = useState<string | null>(null);

  const alertReader = (textAlert: string) => {
    setAlert(textAlert);

    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
      <section id='contact'>
        <div className={styles.ContactContainer}>
          {alert ? <Alert severity="info" variant="outlined" style={{ position: 'absolute', marginTop: '-300px' }}>{alert}</Alert> : false}
          <div className={styles.buttonContainer}>

            <div className={styles.info}>
              <CopyButton onClickProps={{ text: 'jess.andradec@gmail.com', alertText: 'E-mail', setAlertState: alertReader }}>
                <AlternateEmailIcon />
              </CopyButton>
              <div className={styles.infoContainer}>
                <h3>E-mail</h3>
                <p>jess.andradec@gmail.com</p>
              </div>
            </div>

            <div className={styles.info}>
              <MyButton href='https://github.com/jess-andrade'>
                <GitHubIcon />
              </MyButton>
              <div className={styles.infoContainer}>
                <h3>GitHub</h3>
                <p>@jess-andrade</p>
              </div>
            </div>

            <div className={styles.info}>
              <CopyButton onClickProps={{ text: '+39 351 637 1007', alertText: 'Phone number', setAlertState: alertReader }}>
                <CallIcon />
              </CopyButton>
              <div className={styles.infoContainer}>
                <h3>Phone number</h3>
                <p>+39 351 637 1007</p>
              </div>
            </div>

            <div className={styles.info}>
              <MyButton href='https://www.linkedin.com/in/jess-andradec/'>
                <LinkedInIcon />
              </MyButton>
              <div className={styles.infoContainer}>
                <h3>Linkedin</h3>
                <p>jess-andradec</p>
              </div>
            </div>

          </div>
        </div>
      </section >
    </>
  )
}