import { useState } from 'react';
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters/animate';
import './about.scss';

const About = () => {
    const [letterClass] = useState('text-animate')

    return (
        <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
            letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            My name is Effiong Daniel, and I'm by professional, recognized as Devintel. 
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I write in HTML, CSS, JS, REACTJS. I also have a vast experience is graphics 
            design and print media, using tools like PHOTOSHOP, CORELDRAW, ILLUSTRATOR.
            Also have a practical engagement on UI designs.
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence that would be a curious person
            capacity to learn and adapt, fun, goal oriented, and I also love to sleep
            and enjoy video games, as a means to rejuvenate my mental strength.
          </p>
          <p>
            As of now, I am very keen on improve my skills, as I have only gathered less 
            than experience in coding, but in this short while, I have engaged with a 
            number of exciting and challenging projects, using vast methodology, designing 
            and implementing algorithms.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
          </div>
      </div>
      <Loader type="pacman" />
        </>
    )
}

export default About;