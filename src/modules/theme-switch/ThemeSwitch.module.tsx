import { useState, useEffect } from "react";

import { IoMoon, IoSunny } from "react-icons/io5";

const ThemeSwitch = () => {
    const [dark, setDark] = useState(false);
    useEffect(() => {
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("night");
        console.log(dark)
        console.log("Useeffect Triggered")
    }, [])
    const darkModeHandler = () => {
        if(dark) {
            setDark(!dark);
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("night");
        }
        else {
            setDark(!dark);
            document.documentElement.classList.add("night");
            document.documentElement.classList.remove("light");
        }
        
    }
    const iconSize = 24;
    return (
        <div className="mr-2">
            <button type="button" className="rounded-full dark:text-slate-200 bg-zinc-900 text-slate-200 p-2" onClick={darkModeHandler}>
                
                { dark && <IoMoon size={iconSize} /> }
                { !dark && <IoSunny size={iconSize} /> }
                
            </button>
        </div>
    )
}
export default ThemeSwitch;