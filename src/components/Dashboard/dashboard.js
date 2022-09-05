import { useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animate';
import './dashboard.scss'

const Dashboard = () => {
    const [letterClass] = useState('text-animate')
    return (
        <>
        <div className='container portfolio-page'>
        <div className="text-zone">
           <h1>
           <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15} />
           </h1>
           <p>
            Here are a few peek of works I have done actively in the span of 
            few months, collectively from bootcamp codings, code challenges,
            and a few number of collaborative projects I can't get my fingers 
            on for now.
          </p>
        </div>

        </div>
        <Loader type='pacman' />
        </>
          
    )
}

export default Dashboard;