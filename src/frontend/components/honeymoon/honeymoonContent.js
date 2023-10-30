import './Honeymoon.css';

const HoneymoonContent = (props) => {
    return (
        <>
            <div className="carousel">
                <img src={props.image} alt="img" />
                <h4>{props.heading}</h4>
                <p>{props.parag}</p>
            </div>
        </>
    )
};

export default HoneymoonContent;