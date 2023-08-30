import styles from "../styles/Contact.module.css";

import MyButton from "./MyButton";
import CopyButton from "./CopyButton";

import { useState } from "react";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CallIcon from "@mui/icons-material/Call";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Alert } from "@mui/material";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import texts from "@/content/texts";
import { useLanguageContext } from "@/context/languageContext";

const style = {
  position: "absolute" as "absolute",
  top: "20%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f3efe0",
  border: "none",
  borderRadius: "15px",
  boxShadow: 24,
  p: 3,
  display: "flex",
  justifyContent: "center",
};

export default function Contact() {
  const [open, setOpen] = useState(false);
  const [alertText, setAlertText] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { language } = useLanguageContext();

  const contentText = texts[language]["contact"];

  const setAlert = (text: string) => {
    setAlertText(text);
    handleOpen();

    setTimeout(() => {
      handleClose();
    }, 1000);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
        disableEnforceFocus
        disablePortal
        disableScrollLock
      >
        <Box sx={style}>
          <Typography id="modal-modal-description">
            {alertText} {contentText["copiedToClipboard"]}.
          </Typography>
        </Box>
      </Modal>

      <section id="contact">
        <div className={styles.ContactContainer}>
          <div className={styles.buttonContainer}>
            <div className={styles.info}>
              <CopyButton
                onClickProps={{
                  text: "jess.andradec@gmail.com",
                  alertText: "E-mail",
                  setAlertState: setAlert,
                }}
              >
                <AlternateEmailIcon />
              </CopyButton>
              <div className={styles.infoContainer}>
                <h3>E-mail</h3>
                <p>jess.andradec@gmail.com</p>
              </div>
            </div>

            <div className={styles.info}>
              <MyButton href="https://github.com/jess-andrade">
                <GitHubIcon />
              </MyButton>
              <div className={styles.infoContainer}>
                <h3>GitHub</h3>
                <p>@jess-andrade</p>
              </div>
            </div>

            <div className={styles.info}>
              <CopyButton
                onClickProps={{
                  text: "+55 71 9273-2641",
                  alertText: contentText["phoneNumber"],
                  setAlertState: setAlert,
                }}
              >
                <WhatsAppIcon />
              </CopyButton>
              <div className={styles.infoContainer}>
                <h3>{contentText["phoneNumber"]}</h3>
                <p>+55 71 9273-2641</p>
              </div>
            </div>

            <div className={styles.info}>
              <MyButton href="https://www.linkedin.com/in/jess-andradec/">
                <LinkedInIcon />
              </MyButton>
              <div className={styles.infoContainer}>
                <h3>Linkedin</h3>
                <p>jess-andradec</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
