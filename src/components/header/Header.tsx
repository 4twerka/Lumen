import React from "react";
import styles from './Header.module.css';
import Logo from "../../assets/Logo.png";
import Search from "../../assets/search.png";
import Microphone from "../../assets/Microphone.png";
import Person from "../../assets/person.png";
import Heart from "../../assets/heart.png";
import Basket from "../../assets/basket.png";
import { Typography } from "@mui/material";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="Logotype" className={styles.logo} />
                <button className={styles.burgerMenu}>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                    <span className={styles.burgerLine}></span>
                </button>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><Typography variant='body2'>Каталог</Typography></li>
                    <li className={styles.navItem}><Typography variant='body2'>Сезонна колекція</Typography></li>
                    <li className={styles.navItem}><Typography variant='body2'>Про нас</Typography></li>
                    <li className={styles.navItem}><Typography variant='body2'>Співпраця</Typography></li>
                    <li className={styles.navItem}><Typography variant='body2'>Інфо</Typography></li>
                </ul>
            </nav>

            <div className={styles.actions}>
                <div className={styles.searchContainer}>
                    <button className={styles.searchButton}>
                        <img src={Search} alt="Search" />
                    </button>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search"
                    />
                    <button className={styles.microphoneButton}>
                        <img src={Microphone} alt="Microphone" />
                    </button>
                </div>
                <button className={styles.iconButton}>
                    <img src={Person} alt="Account" />
                </button>
                <button className={styles.iconButton}>
                    <img src={Heart} alt="Likes" />
                </button>
                <button className={styles.iconButton}>
                    <img src={Basket} alt="Basket" />
                </button>
            </div>
        </header>
    );
}

export { Header };
