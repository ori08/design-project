import profilePic1 from '../assets/img/avatar-kady.jpg'
import profilePic2 from '../assets/img/avatar-aiysha.jpg'
import profilePic3 from '../assets/img/avatar-arthur.jpg'
import iconQuotes from '../assets/img/icon-quotes.svg'
import bgPattren2 from '../assets/img/bg-pattern-about-2-contact-1.svg'
import bgPattren1 from '../assets/img/bg-pattern-home-4-about-3.svg'

export function SectionThree() {
    const labels =
        [{ text: "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”", title: "Kady Baker", desc: "Product Manager at Bookmark", img: profilePic1 },
        { text: "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”", title: "Aiysha Reese", desc: "Founder of Manage", img: profilePic2 },
        { text: "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”", title: "Arthur Clarke", desc: "Co-founder of MyPhysio", img: profilePic3 }
        ]

    var key = 0

    return (
        <div className="section-three">
            <img className='bgPattren' src={bgPattren1} />
            <img className='bgPattren' src={bgPattren2} />
            <div className="hero">
                <p className='header'>Delivering real results for top companies. <br /> Some of our <span>success stories.</span> </p>
                <section>
                    {labels.map(label => {
                        return <div className='card'>
                            <p>{label.text}</p>
                            <p>{label.title}</p>
                            <p>{label.desc}</p>
                            <img className='profile-pic' src={label.img} />
                            <img className='icon-quotes' src={iconQuotes} />
                        </div>
                    })}
                </section>
            </div>

        </div >

    )


} 