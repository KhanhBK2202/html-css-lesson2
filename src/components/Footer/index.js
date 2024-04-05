import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Footer.module.css'
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
function Footer() {

    return (
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
    )
}

export default Footer
