import { FaXmark } from "react-icons/fa6";
import { ImInsertTemplate } from "react-icons/im";

const sampleData = [
    { eventTitle: "User logged out", description: "21/04/2025 at 23:54, Whitechapel, London, England" },
    { eventTitle: "User logged in", description: "24/06/2025 at 22:00, Whitechapel, London, England" },
    { eventTitle: "User suspended their account", description: "12/07/2025 at 06:30, Whitechapel, London, England" },
    { eventTitle: "User reactivated their account", description: "25/09/2025 at 20:08, Whitechapel, London, England" },
    { eventTitle: "User resetted their password", description: "26/09/2025 at 13:45, Whitechapel, London, England" },
]

const AccountActivity = () => {
    return (
        <div style={{ height: "calc(100vh - 230px)" }}>
            <h1 className="text-center font-bold text-2xl">Activity</h1>
            <ul className="py-2 grid grid-cols-1 gap-1.5">
                {sampleData.map((item, index) => {
                    return (
                        <li key={index}>
                            <section className="bg-zinc-950/[.25] p-2 rounded-md">
                                <section className="flex items-center justify-between">
                                    <p className="text-lg font-bold">{item.eventTitle}</p>
                                    <button type="submit" title="Delete Account Permanently" className="bg-red-600 
                    hover:bg-red-700 ml-3 p-0.5 rounded-full text-gray-200"><FaXmark /></button>
                                </section>
                                <section>
                                    <p className="text-pretty text-sm font-semibold">{item.description}</p>
                                </section>
                            </section>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
export default AccountActivity;