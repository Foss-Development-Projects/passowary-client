// Image Assets
import ThemeSwitch from '../../../modules/theme-switch/ThemeSwitch.module';
import Logo from './../../../assets/img/vault.png';

// Component
const Header = () => {
    return (
        <div
            className="p-3 header rounded-md flex flex-row items-center justify-between"
        >
            <h1
                className="flex items-center text-3xl"
            >
                <img className="w-8 h-8 mr-2 rounded-full object-cover text-right"
                    src={Logo}
                    alt="App Logo" />
                Vault
            </h1>
            <div className='flex items-center justify-between'>
                <ThemeSwitch />
                <img
                    className="w-10 h-10 rounded-full object-cover text-right"
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="Profile Image"
                />
            </div>

        </div>
    )
}
export default Header;