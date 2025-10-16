import { Outlet } from "react-router";

const AccountPreview = () => {
    return (
        <div className="shadow-lg shadow-slate-200/[.09] my-2 pt-5 bg-gradient-to-bl from-blue-500/[.09] p-2 w-full rounded-lg overflow-y-scroll">
            <Outlet />
        </div>
    )
}
export default AccountPreview;