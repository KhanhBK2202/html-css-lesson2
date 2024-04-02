import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Dropdown.module.css'

function Dropdown(props) {
    return (
        <>
            {props.items.map((item, idx) => (
                <div key={idx} className={styles.wrapper}>
                    <div className={styles.dropdownItem}>
                        {item.name} &nbsp;
                        {item.isDrop && (
                            <FontAwesomeIcon icon={faChevronDown} className={styles.arrowDown} />
                        )}
                    </div>
                    {item.isDrop && (
                        <ul className={styles.options}>
                            {item.children.map((option, idx) => (
                                <>
                                    {idx === 0 ? (
                                        <li
                                            key={idx}
                                            className={`${styles.firstOption} ${styles.option}`}
                                        >
                                            {option}
                                        </li>
                                    ) : (
                                        <li
                                            key={idx}
                                            className={`${styles.otherOption} ${styles.option}`}
                                        >
                                            {option}
                                        </li>
                                    )}
                                </>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    )
}

export default Dropdown
