import NavBar from "./navBar";
import './homeSection.css'
import HeroContent from "./HeroContent";

const HomeSection = () => {
    return (
        <>
        <div className="hero-image">
            <NavBar />
            <HeroContent />
        </div>
        </>
    )
}

export default HomeSection;