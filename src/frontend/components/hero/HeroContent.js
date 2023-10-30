import './HeroContent.css';

const HeroContent = () => {
    return(
        <div className='homepage-content'>
        <h1 className='Explore'>Exploring the world</h1>
        <h3 className='top-destination'>Top Destinations</h3>
        <div className="destinations">
            <ul className="menu-ul">
                <li>Hnza Valley</li>
                <li className='active'>Skardu Valley</li>
                <li>naran/shogan</li>
                <li>Azad Kashmir</li>
                <li>Chitral valley</li>
                <li>Muree</li>
            </ul>
        </div>
        </div>
    )
}

export default HeroContent;