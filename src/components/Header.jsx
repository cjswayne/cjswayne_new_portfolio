import {NavLink} from 'react-router-dom'
import logo from '../assets/linkedin-square.png'

function Header(){

    return (
        <header className="flex w-100">
            <div className="flex flex-row items-center logoName">
                <img src={logo} className="cjsLogo mw9 mh9 w-10 h-10 pr3" alt="" />
                    <h3>Charles Swayne</h3>
            </div>
                

            <nav className="flex flex-row">
                <NavLink className="nav" to='/'>Portfolio</NavLink>
                <NavLink to='/about'>About Me</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
            </nav>
        </header>
    )
}

export default Header