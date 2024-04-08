import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Card.module.css'
function Card(props) {
    const fadeAnimation = [
        'fade-down-right',
        'fade-down',
        'fade-down-left',
        'fade-up-right',
        'fade-up',
        'fade-up-left',
    ]
    return (
        <>
            {props.items.map((item, idx) => (
                <div
                    key={idx}
                    className={styles.cardItem}
                    style={{
                        backgroundColor: idx % 2 === 0 ? '#001E45' : '#F3F3F3',
                        color: idx % 2 === 0 ? 'white' : 'black',
                    }}
                    data-aos={fadeAnimation[idx]}
                >
                    <div className={styles.icon}>
                        <img src={item.icon} alt="icon" />
                        {/* <FontAwesomeIcon
                            icon={item.icon}
                            style={{ color: idx % 2 === 0 ? 'white' : 'var(--primary-color)' }}
                        /> */}
                    </div>
                    <h4 className={styles.heading}>{item.heading}</h4>
                    <div className={styles.content}>{item.content}</div>
                </div>
            ))}
        </>
    )
}

export default Card
