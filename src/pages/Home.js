import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import Card from '../components/Card'
import '../assets/style/pages.css'

const cardItems = [
    {
        icon: 'https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector1.png&w=128&q=75',
        heading: "Customer's Requirements Managed By Help Desk Software.",
        content:
            'Enable to provide quick and easy answers to help seekers. Makes it simple to organize, prioritize.',
    },
    {
        icon: 'https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector2.png&w=256&q=75',
        heading: 'Deliver On SLAs',
        content:
            'Nail your Service Level Agreements, every time. Get the important things done first with prioritized queues.',
    },
    {
        icon: 'https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector3.png&w=128&q=75',
        heading: 'Offer Self-Service',
        content:
            'Help customers help themselves, scale support with a limited staff. Save time and reduce tickets with an integrated knowledge base.',
    },
    {
        icon: 'https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector4.png&w=128&q=75',
        heading: 'Automate Those Repetitive Tasks',
        content:
            'We always try to set up automations for the routine tasks so that we can focus on solving the important stuff and help lighten the workload.',
    },
    {
        icon: 'https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector5.png&w=128&q=75',
        heading: "Customer's Requirements Tracked And Reported On Metrics",
        content:
            "We definitely keep an eye on key operational metrics like most IT organizations. But we've stopped obsessing over random KPIs, and we're way more focused now on measuring what matters most. To summarize, we put the customer experience first, and spend our time drilling into the trends and numbers that can help us make the biggest improvements.",
    },
    {
        icon: 'https://www.cyberlogitec.com.vn/_next/image?url=%2Fstatic%2Fimages%2Fservices%2Fvector6.png&w=128&q=75',
        heading: 'Up-To-Date Staff Training',
        content:
            "CLV helpdesk's tool is always available with the up to date workaround, training materials, guideline document, FAQ from users… We had a clear plan to make sure all of helpdesk team members could have the easiest way to reach them in the fastest way when they need to.",
    },
]

function Home() {
    // useEffect(() => {
    //     const vid = document.querySelector(`.${styles.video}`)
    //     if (localStorage.getItem('isChecked') === true) vid.style.pointerEvents = 'none'
    //     else vid.style.pointerEvents = 'auto'
    // }, [localStorage.getItem('isChecked')])

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])
    return (
        <div className="content">
            <div className="mainContent">
                <div className="wrapperVideo">
                    <div className="contentVideo" data-aos="slide-right">
                        <iframe
                            className="video"
                            src="https://www.youtube.com/embed/rNjUDw5E6tY?autoplay=1&mute=1"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="contentText">
                    <h1 className="contentHeading" data-aos="fade-down">
                        Create a Global Support Hub with
                        <div className="highlightText">Global Service Desk</div>
                    </h1>
                    <div className="contentParagraph" data-aos="zoom-in">
                        We play the roles as the support frontiers and the representatives of the IT
                        support. The Global Service Desk is the center where customers (e.g.
                        employees or other stakeholders) can approach for help from their IT service
                        providers. Regardless of whatever the assistance is being provided, the goal
                        of our Global Service Desk is to deliver high-quality service to customers
                        in the timely manner.
                    </div>
                </div>
            </div>

            <div className="weDo">
                <h1 className="weDoHeading" data-aos="fade-up">
                    What <span className="highlightText">we can do</span>
                </h1>
                <div className="cards">
                    <Card items={cardItems} />
                </div>
            </div>

            <div className="page">
                <div className="previousPage">Previous page</div>
                <h2 className="pageName">Quality Assurance</h2>
            </div>
        </div>
    )
}

export default Home
