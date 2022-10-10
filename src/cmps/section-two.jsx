import iconPerson from '../assets/img/icon-person.svg'
import iconCog from '../assets/img/icon-cog.svg'
import iconChart from '../assets/img/icon-chart.svg'
import bgPattren from '../assets/img/bg-pattern-home-3.svg'

export function SectionTwo() {
    const labels =
        [{ img: iconPerson, title: "Experienced Individuals", desc: "Our network is made up of highly experienced professionals who are passionate about what they do." },
        { img: iconCog, title: "Easy to Implement", desc: "Our processes have been refined over years of implementation meaning our teams always deliver." },
        { img: iconChart, title: "Enhanced Productivity", desc: "Our customized platform with in-built analytics helps you manage your distributed teams." }
        ]
    var key = 0

    return (
        <div className="section-two">

            <div className="hero">
                <div className="border-top"></div>

                <section>
                    <p>Build & manage <br /> distributed teams <br /> like no one else.</p>
                </section>

                <section>
                    {labels.map(label => {
                        return <div className="card-info">
                            <img className='card-info-img' src={label.img} />
                            <div>
                                <p>{label.title}</p>
                                <p>{label.desc}</p>
                            </div>
                        </div>
                    })}
                </section>

            </div>
            <img className='bg-pattren' src={bgPattren} />
        </div >

    )


} 