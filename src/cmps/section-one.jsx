import { AppHeader } from './header'
import { MainContact } from './main-contact'
import bgPatren from '../assets/img/bg-pattern-home-2.svg'


{/* <img className='bg-patren' src={bgPatren} /> */}


export function SectionOne() {
 

    return (
        <div className="section-one">

            <img className='bg-patren' src={bgPatren} />
            <AppHeader  />
            <MainContact />
    
        </div>

    )


} 