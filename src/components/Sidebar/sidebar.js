import './sidebar.scss';
import DevLogo from '../../assets/images/devLogo.png';
import DLogoSub from '../../assets/images/dLogoSub.png';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog, faBriefcase, faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={DevLogo} alt='logo' />
            <img className='sub-logo' src={DLogoSub} alt='sublogo' />
        </Link>

        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#afafaf' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#afafaf' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#afafaf' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='dashboard-link' to='/dashboard'>
                <FontAwesomeIcon icon={faBriefcase} color='#afafaf' />
            </NavLink>
            
        </nav>
        <ul>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://devintelartbay.netlify.app/'>
                    <FontAwesomeIcon icon={faBlog} color='#afafaf' />
                </a>
            </li>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://github.com/Devintel-byte'>
                    <FontAwesomeIcon icon={faGithub} color='#afafaf' />
                </a>
            </li>
            <li>
                <a target='_blank' 
                rel='noreferrer' 
                href='https://www.youtube.com/channel/UCf5HeK-UlOdC6r1drZ0TUmA'>
                    <FontAwesomeIcon icon={faYoutube} color='#afafaf' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar;