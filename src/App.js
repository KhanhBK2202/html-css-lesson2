import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './App.module.css'
import Card from './components/Card'
import Dropdown from './components/Dropdown'
import {
    faLifeRing,
    faLaptop,
    faHeadset,
    faGear,
    faShareNodes,
    faUsersViewfinder,
    faBars,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'

function App() {
    const dropdownItems = [
        {
            name: 'Solutions',
            children: ['Overview', 'Forwarding', 'Container Tracking', 'Shipping', 'Factory'],
            isDrop: true,
        },
        {
            name: 'Services',
            children: [
                'Overview',
                'Software Development',
                'Quality Assurance',
                'Global Service Desk',
            ],
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

    const cardItems = [
        {
            icon: faLifeRing,
            heading: "Customer's Requirements Managed By Help Desk Software.",
            content:
                'Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize.',
        },
        {
            icon: faLaptop,
            heading: 'Deliver On SLAs',
            content:
                'Nail your Service Level Agreements, every time. Get the important things done first with prioritized queues.',
        },
        {
            icon: faHeadset,
            heading: 'Offer Self-Service',
            content:
                'Help customers help themselves, scale support with a limited staff. Save time and reduce tickets with an integrated knowledge base.',
        },
        {
            icon: faGear,
            heading: 'Automate Those Repetitive Tasks',
            content:
                'We always try to set up automations for the routine tasks so that we can focus on solving the important stuff and help lighten the workload.',
        },
        {
            icon: faShareNodes,
            heading: "Customer's Requirements Tracked And Reported On Metrics",
            content:
                "We definitely keep an eye on key operational metrics like most IT organizations. But we've stopped obsessing over random KPIs, and we're way more focused now on measuring what matters most. To summarize, we put the customer experience first, and spend our time drilling into the trends and numbers that can help us make the biggest improvements.",
        },
        {
            icon: faUsersViewfinder,
            heading: 'Up-To-Date Staff Training',
            content:
                "CLV helpdesk's tool is always available with the up to date workaround, training materials, guideline document, FAQ from users… We had a clear plan to make sure all of helpdesk team members could have the easiest way to reach them in the fastest way when they need to.",
        },
    ]

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

    return (
        <div className={styles.app}>
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

            <div className={styles.content}>
                <div className={styles.mainContent}>
                    <div className={styles.wrapperVideo}>
                        <div className={styles.contentVideo}>
                            <iframe
                                className={styles.video}
                                src="https://www.youtube.com/embed/rNjUDw5E6tY?autoplay=1&mute=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <div className={styles.contentText}>
                        <h1 className={styles.contentHeading}>
                            Create a Global Support Hub with
                            <div style={{ color: '#00B9E7' }}>Global Service Desk</div>
                        </h1>
                        <div className={styles.contentParagraph}>
                            We play the roles as the support frontiers and the representatives of
                            the IT support. The Global Service Desk is the center where customers
                            (e.g. employees or other stakeholders) can approach for help from their
                            IT service providers. Regardless of whatever the assistance is being
                            provided, the goal of our Global Service Desk is to deliver high-quality
                            service to customers in the timely manner.
                        </div>
                    </div>
                </div>

                <div className={styles.weDo}>
                    <h1 className={styles.weDoHeading}>
                        What{' '}
                        <span style={{ color: 'var(--secondary-color)', margin: '14px 0' }}>
                            we can do
                        </span>
                    </h1>
                    <div className={styles.cards}>
                        <Card items={cardItems} />
                    </div>
                </div>

                <div className={styles.page}>
                    <div className={styles.previousPage}>Previous page</div>
                    <h2 className={styles.pageName}>Quality Assurance</h2>
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.media}>
                    <FontAwesomeIcon icon={faFacebook} /> &nbsp; &nbsp;
                    <FontAwesomeIcon icon={faYoutube} />
                </div>
                <div className={styles.contactLink}>
                    <span>CONTACT US</span> &nbsp; &nbsp;
                    <span>JOIN US</span>
                </div>
            </div>
        </div>
    )
}

export default App
