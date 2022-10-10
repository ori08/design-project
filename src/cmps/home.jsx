import { SectionOne } from '../cmps/section-one'
import { SectionTwo } from '../cmps/section-two'
import { SectionThree } from '../cmps/section-three'
import { SectionFour } from '../cmps/section-four'

export function Home() {


    return (
        <div className="home">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
        </div>
    )


}