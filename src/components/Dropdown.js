import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../assets/style/components.css'

function Dropdown(props) {
    return (
        <>
            {props.items?.map((item, idx) => (
                <div key={idx} className="wrapper">
                    <div className="dropdownItem">
                        {item.name} &nbsp;
                        {item.isDrop && (
                            <FontAwesomeIcon icon={faChevronDown} className="arrowDown" />
                        )}
                    </div>
                    {item.isDrop && (
                        <ul className="options">
                            {item.children.map((option, idx) => (
                                <>
                                    {idx === 0 ? (
                                        <li
                                            key={idx}
                                            className="firstOption option"
                                        >
                                            {option}
                                        </li>
                                    ) : (
                                        <li
                                            key={idx}
                                            className="otherOption option"
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
