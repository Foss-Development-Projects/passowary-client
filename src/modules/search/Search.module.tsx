import { FaMagnifyingGlassArrowRight } from "react-icons/fa6";
import { FaSearch } from 'react-icons/fa';

const CredentialSearch = () => {
    return (
        <label className="py-2 pr-2 m-2 shade z-10 rounded-lg flex items-center ">
            <div className="p-2 rounded-full">
                <FaMagnifyingGlassArrowRight size={24} />
            </div>
            <div className="w-full">
                <span className="sr-only">Search</span>
                <input
                    className="placeholder:bold placeholder:text-slate-400 bg-transparent block w-full rounded-lg py-2 pl-2 pr-3 shadow-sm text-lg outline-none"
                    placeholder="Search..."
                    type="text"
                    name="search"
                />
            </div>

            <button type="button" className="ml-2 p-2 rounded-full hover:bg-zinc-950 hover:text-gray-200 transition-colors"><FaSearch size={24} /></button>


        </label>
    )
}

export default CredentialSearch;