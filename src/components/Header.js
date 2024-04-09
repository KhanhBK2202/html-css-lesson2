import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './style.module.css'
import { useEffect, useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Dropdown from './Dropdown'

const dropdownItems = [
    {
        name: 'Solutions',
        children: ['Overview', 'Forwarding', 'Container Tracking', 'Shipping', 'Factory'],
        isDrop: true,
    },
    {
        name: 'Services',
        children: ['Overview', 'Software Development', 'Quality Assurance', 'Global Service Desk'],
        isDrop: true,
    },
    {
        name: 'Careers',
        children: ['Overview', 'Experienced Hire', 'Fresher Training Program'],
        isDrop: true,
    },
    {
        name: 'About Us',
        children: [],
        isDrop: false,
    },
]

function Header() {
    const [isChecked, setIsChecked] = useState(false)
    const checkHandler = () => {
        setIsChecked(!isChecked)
    }
    useEffect(() => {
        const barIcon = document.querySelector(`.${styles.icon}`)
        if (isChecked) {
            barIcon.classList.toggle(styles.active)
            barIcon.classList.remove(styles.inactive)
        } else {
            barIcon.classList.toggle(styles.inactive)
            barIcon.classList.remove(styles.active)
        }
    }, [isChecked])

    // useEffect(() => {
    //     localStorage.setItem('isChecked', isChecked)
    // }, [isChecked])

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src="logo.png" alt="logo" />
            </div>
            <div className={styles.dropdown}>
                <Dropdown items={dropdownItems} />
            </div>
            <div className={styles.contactBtn}>Contact Us</div>

            {/* Toggle button for responsive */}
            <div className={styles.toggleBtn}>
                <label htmlFor="navbar-menu-input" className={styles.toggleBtn}>
                    <FontAwesomeIcon icon={faBars} className={styles.icon} />
                </label>
                <input
                    type="checkbox"
                    name=""
                    className={styles.navbarInput}
                    id="navbar-menu-input"
                    checked={isChecked}
                    onChange={checkHandler}
                />

                <label htmlFor="navbar-menu-input" className={styles.navbarOverlay}></label>
                <div className={styles.navbarMenu}>
                    <div className={styles.contactBtnNavbar}>Contact Us</div>
                    <Dropdown items={dropdownItems} />
                </div>
            </div>
        </div>
    )
}

export default Header
