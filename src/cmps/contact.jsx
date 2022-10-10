import { AppHeader } from './header'
import iconPerson from '../assets/img/icon-person.svg'
import iconCog from '../assets/img/icon-cog.svg'
import iconChart from '../assets/img/icon-chart.svg'
import bgPatren from '../assets/img/bg-pattern-about-1-mobile-nav-1.svg'
import bgPatren1 from '../assets/img/bg-pattern-about-2-contact-1.svg'
import bgPatren2 from '../assets/img/bg-pattern-home-2.svg'
const labels =
    [{ img: iconPerson, desc: "The quality of our talent network" },
    { img: iconCog, desc: "Usage & implementation of our software" },
    { img: iconChart, desc: "How we help drive innovation" }
    ]
var key = 0

export function Contact() {


    return (
        <div className="contact">
               <img className='bg-patren-bottom' src={bgPatren2} />
            <div className="section-one" style={{ maxHeight: "789px", minHeight: "789px" }}>
                <AppHeader />
             

                <img className='bgPatren' src={bgPatren} />
                <div className='hero flex'>

                    <div className='flex-column'>
                        <p className='title'>Contact</p>
                        <p className='title'>Ask us about</p>
                        {labels.map(label => {
                            return <div className='card flex'>
                                <img className='icon' src={label.img} />
                                <p>{label.desc}</p>
                            </div>
                        })}
                    </div>

                    <div className='flex-column ' >
                        <div><input type="text" placeholder='Name' /></div>
                        <div><input type="mail" placeholder='Email Address' /></div>
                        <div><input type="text" placeholder='Company Name' /></div>
                        <div><input type="text" placeholder='Title' /></div>
                        <div><input type="text" placeholder='Message' /></div>
                        <button className='submit'>Submit</button>

                    </div>
                    <img className='bg-patren' src={bgPatren1} />

                </div>


            </div>


        </div>
    )


}