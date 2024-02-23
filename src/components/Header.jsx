import {NavLink} from 'react-router-dom'

function Header(){

    return (
        <header class="flex w-100">
            <span>
                    <h3>Charles Swayne</h3>
            </span>
                

            <nav>
                <NavLink className="nav" to='/'>Portfolio</NavLink>
                <NavLink to='/about'>About Me</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
            </nav>
        </header>
    )
}

export default Header