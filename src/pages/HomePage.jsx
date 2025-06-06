import HeroSection from '../container/HeroSection.jsx'
import FeaturedProduct from '../container/FeaturedSection.jsx'
import AboutSection from '../container/AboutSection.jsx'
import ContactSection from '../container/ContactSection.jsx'

export default function HomePage(){
    return(
        <>
        <HeroSection/>
        <FeaturedProduct/>
        <AboutSection/>
        <ContactSection/>
        </>
    )
}