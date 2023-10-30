import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../places/Places.css';
import HoneymoonContent from './honeymoonContent';
import { honeymoonData, responsive} from './honeymoonData';


const honeymoonDetail = honeymoonData.map(item => (
    <HoneymoonContent image={item.imageUrl} heading={item.heading} parag={item.paragraph} />
))

const Honeymoon = () => {
    return (
        <>
        <div className="places">
            <h3>Honeymoon Packages From Pakistan</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="201" height="4" viewBox="0 0 201 4" fill="none">
                <line y1="-1.5" x2="200.002" y2="-1.5" transform="matrix(0.999988 -0.00488705 0.000540868 1 1 3.97742)" stroke="#DFDFDF" stroke-width="3" />
                <line x1="51" y1="1.5" x2="151" y2="1.5" stroke="#FFAC0B" stroke-width="3" />
            </svg>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            {/* <HoneymoonContent /> */}
        </div>

        <Carousel autoPlay={true} autoPlaySpeed={3000} infiniteLoop={true} transitionDuration={.05} showDots={true} responsive={responsive}>
            {honeymoonDetail}
        </Carousel>;
    </>
    )
}

export default Honeymoon;