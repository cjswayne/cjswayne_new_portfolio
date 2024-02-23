import {NavLink} from 'react-router-dom'

function Header(){

    return (
        <header class="flex">
            {/* <img src="" alt="" /> */}
            <h3>Charles Swayne</h3>

            <nav>
                <NavLink to='/'>Portfolio</NavLink>
                <NavLink to='/about'>About Me</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='/resume'>Resume</NavLink>
            </nav>
        </header>
    )
}

export default Header