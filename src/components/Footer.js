import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/style/components.css'
function Footer() {
    return (
        <div className="footer">
            <div className="media">
                <FontAwesomeIcon icon={faFacebook} /> &nbsp; &nbsp;
                <FontAwesomeIcon icon={faYoutube} />
            </div>
            <div className="contactLink">
                <span>CONTACT US</span> &nbsp; &nbsp;
                <span>JOIN US</span>
            </div>
        </div>
    )
}

export default Footer
