import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import '../assets/style/components.css'

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
        const barIcon = document.querySelector(".icon")
        if (isChecked) {
            barIcon.classList.toggle("active")
            barIcon.classList.remove("inactive")
        } else {
            barIcon.classList.toggle("inactive")
            barIcon.classList.remove("active")
        }
    }, [isChecked])

    // useEffect(() => {
    //     localStorage.setItem('isChecked', isChecked)
    // }, [isChecked])

    return (
        <div className="header">
            <div className="logo">
                <img
                    src={require('../assets/images/logo.png')}
                    alt="logo"
                    className="logoImg"
                />
            </div>
            <div className="dropdown">
                <Dropdown items={dropdownItems} />
            </div>
            <div className="contactBtn">Contact Us</div>

            {/* Toggle button for responsive */}
            <div className="toggleBtn">
                <label htmlFor="navbar-menu-input" className="toggleBtn">
                    <FontAwesomeIcon icon={faBars} className="icon" />
                </label>
                <input
                    type="checkbox"
                    name=""
                    className="navbarInput"
                    id="navbar-menu-input"
                    checked={isChecked}
                    onChange={checkHandler}
                />

                <label htmlFor="navbar-menu-input" className="navbarOverlay"></label>
                <div className="navbarMenu">
                    <div className="contactBtnNavbar">Contact Us</div>
                    <Dropdown items={dropdownItems} />
                </div>
            </div>
        </div>
    )
}

export default Header
