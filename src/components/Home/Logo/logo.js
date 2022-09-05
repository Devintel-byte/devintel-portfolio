import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import DLogo from '../../../assets/images/dLogo.png';
import './logo.scss';

const Logo = () => {
    const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img className='solid-logo'
            ref={solidLogoRef}
            src={DLogo} 
            alt="JavaScript,  Developer" />

            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="11.6929in" 
            height="8.26772in" 
            version="1.1"
            viewBox="0 0 11692.91 8267.72">
            <g 
             className="svg-container"
             transform="translate(0 457) scale(.1 -.1)"
             fill="none">

            <path 
               ref={outlineLogoRef} 
               d="M6887.79 3279.86l0 1899.47c0,91.67 3.95,150.87 11.46,176.72 7.56,26.01 29.55,51.26 64.54,76 42.22,29.55 71.17,55.48 85.64,77.81 15.08,22.31 22.32,49.45 22.32,81.42 0,94.09 -94.69,165.85 -284.68,215.31 -170.68,43.43 -341.37,65.74 -512.06,65.74 -38,0 -62.13,-6.04 -73.59,-16.89 -11.45,-11.46 -18.7,-37.99 -22.31,-80.82 -5.43,-59.71 -27.14,-89.86 -63.33,-89.86 -19.91,0 -51.26,17.49 -93.48,53.07 -120.63,97.7 -253.93,146.56 -401.08,146.56 -182.75,0 -347.41,-67.56 -493.37,-203.26 -85.64,-81.43 -155.6,-174.91 -208.67,-281.06 -70.57,-137.52 -105.56,-277.44 -105.56,-418.57 0,-165.87 45.84,-326.3 137.52,-480.7 85.04,-142.34 200.24,-252.11 346.2,-328.71 123.05,-63.33 243.67,-95.29 362.48,-95.29 136.91,0 259.35,30.76 367.31,91.67 18.09,9.65 31.96,14.48 42.82,14.48 37.39,0 56.09,-336.76 56.09,-438.09 0,-43.42 -10.25,-77.2 -30.76,-100.12 -20.5,-22.91 -57.39,-42.54 -110.37,-59.11 -74.28,-23.23 -111.58,-64.54 -111.58,-123.63 0,-86.25 85.52,-153.69 256.33,-201.45 301.43,-84.3 503.61,-125.45 606.15,-125.45 101.32,0 151.98,48.27 151.98,144.75zm-959.58 1175.12c-76.6,0 -136.91,40.4 -181.54,121.83 -60.32,108.56 -90.48,250.91 -90.48,427.62 0,160.44 28.95,281.06 86.85,362.48 41.02,58.51 97.11,88.06 167.67,88.06 76.59,0 132.09,-44.63 167.07,-133.29 34.97,-88.66 51.86,-232.21 51.86,-430.03 0,-181.54 -20.5,-302.17 -61.52,-362.49 -31.97,-47.04 -78.41,-71.77 -139.93,-74.18z"/>
               <path d="M6746.65 3279.86l0 1899.47c0,91.67 3.95,150.87 11.46,176.72 7.56,26.01 29.55,51.26 64.54,76 42.22,29.55 71.17,55.48 85.64,77.81 15.08,22.31 22.32,49.45 22.32,81.42 0,94.09 -94.69,165.85 -284.68,215.31 -170.68,43.43 -341.37,65.74 -512.06,65.74 -38,0 -62.13,-6.04 -73.59,-16.89 -11.45,-11.46 -18.7,-37.99 -22.31,-80.82 -5.43,-59.71 -27.14,-89.86 -63.33,-89.86 -19.91,0 -51.26,17.49 -93.48,53.07 -120.63,97.7 -253.93,146.56 -401.08,146.56 -182.75,0 -347.41,-67.56 -493.37,-203.26 -85.64,-81.43 -155.6,-174.91 -208.67,-281.06 -70.57,-137.52 -105.56,-277.44 -105.56,-418.57 0,-165.87 45.84,-326.3 137.52,-480.7 85.04,-142.34 200.24,-252.11 346.2,-328.71 123.05,-63.33 243.67,-95.29 362.48,-95.29 136.91,0 259.35,30.76 367.31,91.67 18.09,9.65 31.96,14.48 42.82,14.48 37.39,0 56.09,-336.76 56.09,-438.09 0,-43.42 -10.25,-77.2 -30.76,-100.12 -20.5,-22.91 -57.39,-42.54 -110.37,-59.11 -74.28,-23.23 -111.58,-64.54 -111.58,-123.63 0,-86.25 85.52,-153.69 256.33,-201.45 301.43,-84.3 503.61,-125.45 606.15,-125.45 101.32,0 151.98,48.27 151.98,144.75zm-959.58 1175.12c-76.6,0 -136.91,40.4 -181.54,121.83 -60.32,108.56 -90.48,250.91 -90.48,427.62 0,160.44 28.95,281.06 86.85,362.48 41.02,58.51 97.11,88.06 167.67,88.06 76.59,0 132.09,-44.63 167.07,-133.29 34.97,-88.66 51.86,-232.21 51.86,-430.03 0,-181.54 -20.5,-302.17 -61.52,-362.49 -31.97,-47.04 -78.41,-71.77 -139.93,-74.18z"/>
               <circle cx="6484.99" cy="2688.76" r="356.28"/>
            </g>
           </svg>

        </div>
    )
}

export default Logo;