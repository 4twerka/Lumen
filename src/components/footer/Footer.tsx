import Logo from '../../assets/Logo.png';
import styles from './Footer.module.css';
import phoneIcon from '../../assets/Smartphone.png';
import messageIcon from '../../assets/Messages.png';
import { Typography } from '@mui/material';

function Footer() {
    return (
        <footer className={styles.footerWrapper}>
        <div className={styles.footer}>
            <div className={styles.footerMain}>
                <img src={Logo} alt="Logo" className={styles.footerLogo} />
                <div className={`${styles.footerRights} ${styles.smHidden}`}>
                    <Typography variant='caption'>2025 all Right Reserved Term of use GREENMIND</Typography>
                </div>
            </div>
            <div className={styles.footerInfo}>
                <span className={styles.footerTitle}><Typography fontWeight="800" variant='button'>Інформація</Typography></span>
                <ul className={styles.footerList}>
                    <li className={styles.footerItem}><Typography variant='body2'>Каталог</Typography></li>
                    <li className={styles.footerItem}><Typography variant='body2'>Сезонна колекція</Typography></li>
                    <li className={styles.footerItem}><Typography variant='body2'>Про нас</Typography></li>
                </ul>
            </div>
            <div className={styles.footerContacts}>
                <span className={styles.footerTitle}><Typography fontWeight="800" variant='button'>Контакти</Typography></span>
                <ul className={styles.footerList}>
                    <li className={styles.smHidden} />
                    <li className={styles.footerItem}>
                        <img width={16} src={phoneIcon} alt="Phone" className={styles.icon} />
                        <Typography variant='body2'>+380 45 677 84 09</Typography>
                    </li>
                    <li className={styles.footerItem}>
                        <img width={16} src={messageIcon} alt="Message" className={styles.icon} />
                        <Typography variant='body2'>Email</Typography>
                    </li>
                </ul>
            </div>
            <div className={`${styles.footerRights} ${styles.smVisible}`}>
                <Typography variant='caption'>2025 all Right Reserved Term of use GREENMIND</Typography>
            </div>
        </div>
        </footer>
    );
}

export { Footer };