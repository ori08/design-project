import bgPatren from '../assets/img/bg-pattern-about-4.svg'

export function AboutSectionThree() {

    return (
        <div className="about-section-three">
         
            <p>Some of our clients</p>
            <div className="lines">
                <div className="border-top"></div>
                <div className="border-top"></div>
                <div className="border-top"></div>
                <div className="border-top"></div>
                <div className="border-top"></div>

            </div>
            <img className='bg-patren' src={bgPatren} />
        </div>

    )


} 