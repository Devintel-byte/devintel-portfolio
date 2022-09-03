import './sidebar.scss';
import DevLogo from '../../assets/images/devLogo.png';
import DLogoSub from '../../assets/images/dLogoSub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={DevLogo} alt='logo' />
            <img className='sub-logo' src={DLogoSub} alt='sublogo' />
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://devintelartbay.netlify.app/'>
                    <FontAwesomeIcon icon={faBlog} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://github.com/Devintel-byte'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://www.youtube.com/channel/UCf5HeK-UlOdC6r1drZ0TUmA'>
                    <FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;