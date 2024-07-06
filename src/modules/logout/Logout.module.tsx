const Logout = (props: any) => {
    return (
        <form action={props.href} className="h-9 w-full p-0.5" method="POST">
            <button type="submit" className="w-full transition-colors font-bold text-lg flex items-center justify-center px-3 mx-2 h-full rounded-full hover:navbar-shade">
                {props.icon}
                <p className="mx-1">{props.name}</p>
                </button>
        </form>
    )
}
export default Logout;