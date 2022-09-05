import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DLogo from '../../assets/images/dLogo.png';
import AnimatedLetters from '../AnimatedLetters/animate';
import Loader from 'react-loaders';
import Logo from './Logo/logo';
import './home.scss';

const Home = () => {
    const [letterClass] = useState('text-animate')
    const nameArray = ['e', 'v', 'i', 'n', 't', 'e', 'l']
    const jobArray = [
        'W', 
        'e', 
        'b', 
        ' ', 
        'D', 
        'e', 
        'v', 
        'e', 
        'l', 
        'o', 
        'p', 
        'e', 
        'r', 
        '.'
    ]

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>  
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>

                <img src={DLogo} alt='developer' />

                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15} 
                />
                <br />

                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={22} 
                />
                
                </h1>
                <h2>Frontend Developer / Javascript Expert / Designer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type='pacman' />
    </>
    )
    

}

export default Home;