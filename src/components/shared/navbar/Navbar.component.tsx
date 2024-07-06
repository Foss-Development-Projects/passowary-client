// Libraries & Packages

import { IoHomeSharp } from "react-icons/io5";
import { FaUserCircle, FaKey, FaInfoCircle, FaDoorOpen, FaDoorClosed } from "react-icons/fa";

import { RiUserAddFill } from "react-icons/ri";

// Custom Components

import Navlink from "../../../modules/navlink/Navlink.module";

// Stylesheets
import './navbar.component.scss';
import Logout from "../../../modules/logout/Logout.module";

const navbarListStyles : Object = { 
    gridTemplateColumns: "repeat(6, 15%)", 
    width: "100%", 
    justifyContent: "space-evenly", 
    alignItems: "center"
}

const authenticated = false;

// Components
const Navbar = () => {
    return (
        <nav className="backdrop-blur-sm bg-blue-500/[.09] sticky top-0 mt-1 mx-3 px-2 rounded-md z-10">
            <ul className="navbar-list h-16 flex overflow-x-scroll py-1" style={navbarListStyles}>
                <Navlink name="Home" href="/" icon={<IoHomeSharp />} />
                <Navlink name="Credentials" href="/credentials" icon={<FaKey />} />
                <Navlink name="Account" href="/account" icon={<FaUserCircle />} />
                {
                    authenticated && <Logout name="Logout" href="" icon={<FaDoorClosed />} />
                }
                {
                    !authenticated && <Navlink name="Login" href="#" icon={<FaDoorOpen />} />
                }
                <Navlink name="Register" href="#" icon={<RiUserAddFill />} />
                <Navlink name="About" href="#" icon={<FaInfoCircle />} />
            </ul>
        </nav>
    )
}

export default Navbar;
