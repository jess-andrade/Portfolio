import styles from '../styles/MoreInfo.module.css'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DoneIcon from '@mui/icons-material/Done';

export default function MoreInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>

        <div className={styles.text}><FmdGoodIcon fontSize='small' /> • Italy, Lombardy - Rozzano </div> <br />
        <div className={styles.text}><SchoolIcon fontSize='small' /><b> • Education:</b> Technical Diploma in Informatics</div> <br />
        <div className={styles.text}><WorkIcon fontSize='small' /><b> • Employement:</b> Open <DoneIcon sx={{ color: 'green' }} /></div>

      </div >
    </div >
  )
}