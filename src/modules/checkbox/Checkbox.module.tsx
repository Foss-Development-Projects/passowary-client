const Checkbox = () => {
    const accentColor = "bg-pink-400"
    return (
        <div className="bg-zinc-950 flex items-center justify-center p-1.5 ml-1 rounded-xl w-6">
            <input id="checkbox" className="w-3 h-3 ease-soft text-base rounded-sm checked:bg-gradient-to-tl checked:from-zinc-950 checked:to-zinc-950 after:text-xxs after:font-awesome after:duration-250 after:ease-soft-in-out duration-250 relative float-left cursor-pointer appearance-none border border-solid border-slate-150 bg-white bg-contain bg-center bg-no-repeat align-top transition-all after:absolute after:flex after:h-full after:w-full after:items-center after:justify-center after:text-white after:opacity-0 after:transition-all after:content-['\2713'] checked:border-0 checked:border-transparent checked:bg-transparent checked:after:opacity-100" type="checkbox" />
            {/* <label htmlFor="checkbox" className="cursor-pointer select-none text-zinc-950"></label> */}
        </div>
    )
}
export default Checkbox;