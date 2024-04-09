import '../assets/style/components.css'
const fadeAnimation = [
    'fade-down-right',
    'fade-down',
    'fade-down-left',
    'fade-up-right',
    'fade-up',
    'fade-up-left',
]
function Card(props) {
    return (
        <>
            {props.items.map((item, idx) => (
                <div
                    key={idx}
                    className={`cardItem ${idx % 2 === 0 ? 'evenCard' : 'oddCard'}`}
                    data-aos={fadeAnimation[idx]}
                >
                    <div className="barIcon">
                        <img src={item.icon} alt="icon" />
                    </div>
                    <h4 className="heading">{item.heading}</h4>
                    <div className="desc">{item.content}</div>
                </div>
            ))}
        </>
    )
}

export default Card
