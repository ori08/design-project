import profilePic1 from '../assets/img/avatar-nikita.jpg'
import profilePic2 from '../assets/img/avatar-christian.jpg'
import profilePic3 from '../assets/img/avatar-cruz.jpg'
import profilePic4 from '../assets/img/avatar-drake.jpg'
import profilePic5 from '../assets/img/avatar-griffin.jpg'
import iconCross from '../assets/img/icon-cross.svg'
import iconClose from '../assets/img/icon-close.svg'
import iconTwitter from '../assets/img/icon-twitter.svg'
import iconLinkdin from '../assets/img/icon-instagram.svg'

import bgPatren1 from '../assets/img/bg-pattern-about-2-contact-1.svg'
import bgPatren2 from '../assets/img/bg-pattern-home-4-about-3.svg'

const labels = [
    { img: profilePic1, name: "Nikita Marks", desc: "Founder & CEO" },
    { img: profilePic2, name: "Cristian Duncan", desc: "Co-founder & COO" },
    { img: profilePic3, name: "Cruz Hamer", desc: "Co-founder & CTO" },
    { img: profilePic4, name: "Drake Heaton", desc: "Business Development Lead" },
    { img: profilePic5, name: "Griffin Wise", desc: "Lead Marketing" },
    { name: "Aden Allan"},

]


export function AboutSectionTwo() {
    var key = 0;
    return (
        <div className="about-section-two">

            <div className="hero">
                <p className="header">Meet the directors</p>
                <div className="cards">

                    {labels.map(label => {
                        key++
                        if (key <= 5)
                            return <div className="card">

                                <img src={label.img} className="profile-img" />
                                <p>{label.name}</p>
                                <p>{label.desc}</p>
                                <img className='icon' src={iconCross} />
                            </div>
                        else return <div className="card">
                            <p className='mt-35'>{label.name}</p>
                            <p>“Empowered teams create truly <br /> amazing products. Set the north star <br /> and let them follow it.”</p>
                            <div className="flex mt-20">
                                <img src={iconTwitter} className="nav-icon mr-10" />
                                <img src={iconLinkdin} className="nav-icon" />                            </div>
                            <img className='icon' src={iconClose} />
                         

                        </div>
                    })}

                </div>
                <img className='bg-patren-mobile' src={bgPatren1} />
                <img className='bg-patren-mobile' src={bgPatren2} />

            </div>


        </div>

    )


} 