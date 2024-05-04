import './assets/scss/main.scss'

function App() {

  return (
    <>
      <div className="container-fluid text-center h-screen p-2">
            <div
                className="p-3 bg-gray-200 header rounded-md flex flex-row items-center justify-between"
            >
                <h1
                    className="bg-gradient-to-r from-green-500 to-cyan-500 text-transparent bg-clip-text text-3xl"
                >
                    Passowary
                </h1>
                <section className="header-section-theme-button">
                        <input defaultChecked="toggleTheme" className="theme-input" type="checkbox" name="theme" id="theme" />
                        <label htmlFor="theme" className="theme-slider bg-gray-400">
                                <span className="theme-button"></span>
                        </label>
                    </section>
                <img
                    className="w-10 h-10 rounded-full object-cover text-right"
                    src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="Profile Image"
                />
            </div>
            <div className="sidebar bg-gray-200 rounded-md z-10">
                <section className="sidebar-toggle p-2 w-full">
                    <button
                        className="rounded-full bg-gray-400 outline-none text-2xl w-10"
                    >
                        <i
                            className="transition-transform hover:rotate-180 fa-solid fa-angle-left"
                        ></i>
                    </button>
                </section>
                <label className="relative block p-1">
                    <span className="sr-only">Search</span>
                    <span className="absolute top-4 left-0 flex items-center pl-4">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search..."
                        type="text"
                        name="search"
                    />
                </label>
                <ul className="sidebar-list h-full">
                    <li className="sidebar-list-item px-2 py-0.5">
                        <a
                            href="#"
                            className="transition-colors hover:bg-gray-900 hover:text-white bg-white p-2 w-full rounded-lg text-black inline-block"
                        >
                            <i className="fa-brands fa-google text-2xl"></i>
                            <p className="font-bold">Google</p>
                            <button type="button" className="hover:bg-gray-100 hover:text-black rounded-full">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                            
                        </a>
                    </li>
                    <li className="sidebar-list-item px-2 py-0.5">
                        <a
                            href="#"
                            className="transition-colors hover:bg-gray-900 hover:text-white bg-white p-2 w-full rounded-lg text-black inline-block"
                        >
                            <i className="fa-brands fa-microsoft text-2xl"></i>
                            <p className="font-bold">Microsoft</p>
                            <button type="button" className="hover:bg-gray-100 hover:text-black rounded-full">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                        </a>
                    </li>
                    <li className="sidebar-list-item px-2 py-0.5">
                        <a
                            href="#"
                            className="transition-colors hover:bg-gray-900 hover:text-white bg-white p-2 w-full rounded-lg text-black inline-block"
                        >
                            <i className="fa-brands fa-facebook text-2xl"></i>
                            <p className="font-bold">Facebook</p>
                            <button type="button" className="hover:bg-gray-100 hover:text-black rounded-full">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                        </a>
                    </li>
                    <li className="sidebar-list-item px-2 py-0.5">
                        <a
                            href="#"
                            className="transition-colors hover:bg-gray-900 hover:text-white bg-white p-2 w-full rounded-lg text-black inline-block"
                        >
                            <i className="fa-brands fa-twitter text-2xl"></i>
                            <p className="font-bold">Twitter</p>
                            <button type="button" className="hover:bg-gray-100 hover:text-black rounded-full">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                        </a>
                    </li>
                    <li className="sidebar-list-item px-2 py-0.5">
                        <a
                            href="#"
                            className="transition-colors hover:bg-gray-900 hover:text-white bg-white p-2 w-full rounded-lg text-black inline-block"
                        >
                            <i className="fa-brands fa-apple text-2xl"></i>
                            <p className="font-bold">Apple</p>
                            <button type="button" className="hover:bg-gray-100 hover:text-black rounded-full">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                        </a>
                    </li>
                    <li className="sidebar-list-item px-2 py-0.5">
                        <a
                            href="#"
                            className="transition-colors hover:bg-gray-900 hover:text-white bg-white p-2 w-full rounded-lg text-black inline-block"
                        >
                            <i className="fa-brands fa-amazon text-2xl"></i>
                            <p className="font-bold">Amazon</p>
                            <button type="button" className="hover:bg-gray-100 hover:text-black rounded-full">
                                <i className="fa-solid fa-angle-left"></i>
                            </button>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="preview bg-gray-200 rounded-md">
                <h2 className="text-xl">Your Passwords</h2>
                <label className="relative block p-1 mt-5">
                    <span className="sr-only">Search</span>
                    <span className="absolute top-4 left-0 flex items-center pl-4">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input
                        className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search..."
                        type="text"
                        name="search"
                    />
                </label>
                <ul className="search-item-list">
                    <li></li>
                </ul>
            </div>
            <nav className="navbar bg-gray-200 rounded-md">
                <ul className="navbar-list h-full">
                    <li className="navbar-list-item h-full w-full p-1">
                        <a
                            className="transition-colors hover:bg-gray-900 hover:text-white font-bold text-lg flex items-center bg-gray-100 justify-center h-full w-full rounded-md"
                            href="#"
                            >
                            <i className="fa-solid fa-home text-sm"></i>
                            <p className="mx-1">Home</p>
                            </a
                        >
                    </li>
                    <li className="navbar-list-item h-full w-full p-1">
                        <a
                            className="transition-colors hover:bg-gray-900 hover:text-white font-bold text-lg flex items-center bg-gray-100 justify-center h-full w-full rounded-md"
                            href="#"
                            >
                            <i className="fa-solid fa-key text-sm"></i>
                            <p className="mx-1">Passwords</p>
                            </a
                        >
                    </li>
                    <li className="navbar-list-item h-full w-full p-1">
                        <a
                            className="transition-colors hover:bg-gray-900 hover:text-white font-bold text-lg flex items-center bg-gray-100 justify-center h-full w-full rounded-md"
                            href="#"
                            >
                            <i className="fa-solid fa-info-circle text-sm"></i>
                            <p className="mx-1">About</p>
                            </a
                        >
                    </li>
                </ul>
            </nav>
        </div>
    </>
  )
}

export default App
