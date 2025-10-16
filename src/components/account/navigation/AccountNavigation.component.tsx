// Packages & Libraries -- node_modules
import { NavLink } from "react-router-dom";

// Icons & Images -- Assets
import { RiProfileLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSkull } from "react-icons/io5";
import { FaCube } from "react-icons/fa6";
import { FiActivity } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";

const iconSize = 24;

const sidebarNavigationList = [
    { 
        icon: <RiProfileLine size={iconSize} />, 
        title: "Profile", 
        path: "profile" 
    },
    { 
        icon: <FaCube size={iconSize} />, 
        title: "Additional", 
        path: "additional" 
    },
    { 
        icon: <MdOutlineSecurity size={iconSize} />, 
        title: "Security", 
        path: "security" 
    },
    { 
        icon: <FiActivity size={iconSize} />, 
        title: "Activity", 
        path: "activity" 
    },
    { 
        icon: <IoMdNotificationsOutline size={iconSize} />, 
        title: "Notification", 
        path: "notification" 
    },
    { 
        icon: <IoSkull size={iconSize} />, 
        title: "Danger", 
        path: "danger" 
    },
]

const AccountNavigationBar = () => {
    return (
        <div className='rounded-md overflow-x-scroll py-1 h-20 w-full h-full' >
            <ul className="flex divide-x divide-slate-600 rounded-full w-full">
                {sidebarNavigationList.map((item, key) => {
                    return (
                        <li className='w-full h-10 backdrop-blur-sm bg-blue-500/[.09] first:rounded-l-full last:rounded-r-full' key={key}>
                            <NavLink to={item.path} className='px-4 sm:px-2 inline-block h-full flex items-center text-lg font-bold hover:bg-blue-600 hover:text-gray-100 transition-colors' style={{ borderRadius: 'inherit' }}>
                                <div className="mr-2">
                                    { item.icon }
                                </div>
                                <div className="overflow-hidden">
                                    { item.title }
                                </div>
                            </NavLink>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}
export default AccountNavigationBar;