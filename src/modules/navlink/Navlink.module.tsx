// Libraries & Packages

import { Link } from 'react-router-dom';

// Stylesheets

// Component
const Navlink = (props: any) => {
    return (
        <li className="h-9 w-full p-0.5">
            <Link
                className="transition-colors font-bold text-lg flex items-center justify-center px-3 mx-2 h-full rounded-full hover:bg-blue-600 hover:text-gray-100"
                to={props.href}
            >
                {props.icon}
                <p className="mx-1">{props.name}</p>
            </Link>
        </li>
    )
}
export default Navlink;