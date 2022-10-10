import { AppHeader } from './header'
import { SectionFour } from '../cmps/section-four'
import bgPatren2 from '../assets/img/bg-pattern-about-1-mobile-nav-1.svg'

import { AboutSectionOne } from './about-section-one'
import { AboutSectionTwo } from './about-section-two'
import {AboutSectionThree} from './about-section-three'
import bgPatren from '../assets/img/bg-pattern-about-1-mobile-nav-1.svg'

export function About() {


    return (
        <div className="about">
            <div className="section-one" style={{ maxHeight: "517px",minHeight:"517px" }}>
                <AppHeader />
                <img className='bgPatren' src={bgPatren} />
                <AboutSectionOne />
                <img className='bgPatren-mobile' src={bgPatren2} />
            </div>
            <AboutSectionTwo />
            <AboutSectionThree/>
            <SectionFour />

        </div>
    )


}