import bgPatren from '../assets/img/bg-pattern-home-6-about-5.svg'
import fbIcon from '../assets/img/icon-facebook.svg'
import pinterestIcon from '../assets/img/icon-pinterest.svg'
import twitterIcon from '../assets/img/icon-twitter.svg'
import logo from '../assets/img/logo.svg'

export function Footer() {


    var key = 0

    return (
        <div className="footer">

            <section className='flex'>

                <div className='flex'>

                    <div className='flex-column'>
                        <img src={logo} className="logo" />
                        <div className='flex mt-50'>
                            <a href="/">home</a>
                            <a className='ml-50' href="#/about">about</a>
                        </div>
                    </div>

                    <p className='ml-125 fs-15 half-opacity'>987  Hillcrest Lane <br />Irvine, CA <br /> California 92714 <br />Call Us : 949-833-7432</p>
                </div>

                <div>
                    <div className="flex">
                        <img src={fbIcon} />
                        <img src={pinterestIcon} />
                        <img src={twitterIcon} />
                    </div>
                    <p className='half-opacity'>Copyright 2020. All Rights Reserved</p>
                </div>

            </section>

        </div >

    )
} 