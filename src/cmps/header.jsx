import burgerIcon from '../assets/img/icon-hamburger.svg'
import burgerBg from '../assets/img/bg-pattern-about-1-mobile-nav-1.svg'
import logo from '../assets/img/logo.svg'
import closeIcon from '../assets/img/icon-close.svg'
import { useState } from 'react'

export function AppHeader() {
    const [modalFlag, setModalFlag] = useState(false)

    const toggleModal = () => {
        setModalFlag(!modalFlag)
    }
    return (
        <section>
        {modalFlag && <section>
                <div className="burger-menu">
                    <img className='bg-patern' src={burgerBg} />
                    <img src={closeIcon} className="icon" onClick={()=>toggleModal()}  />
                    <a className='nav-link' href="/">home</a>
                    <a className='nav-link' href="#/about">about</a>
                    <button className='contactBtn'><a href="#/contact"> contact us</a></button>
                </div>
                <div className='dark-screen'></div>
            </section>}


        <div className="main-header">
            <div>
                <img src={logo} className="logo mr-80" />
                <a className='mr-40' href="/">home</a>
                <a href="#/about">about</a>
            </div>
            <img className='burger-icon' src={burgerIcon} onClick={()=>toggleModal()} />
            <div><a href="#/contact">contact us</a></div>

          
        </div>
        </section>

    )


} 