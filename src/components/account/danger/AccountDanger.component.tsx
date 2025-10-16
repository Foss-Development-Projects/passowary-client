import { BiTrash } from "react-icons/bi";
import { GrHalt } from "react-icons/gr";

const AccountDanger = () => {
    const iconSize = 24;
    return (
        <div style={{height: "calc(100vh - 225px)"}}>
            <h1 className="text-center font-bold text-2xl">Danger</h1>
            <form action="" name="account-delete-form" className="p-2 rounded-md" method="POST">
                <section className="bg-zinc-950/[.09] p-2 rounded-md my-3">
                    <section className="flex items-center justify-between">
                        <p className="text-md font-bold">Suspend Your Acccount For A Period of Time</p>
                        <button type="submit" title="Suspend Account Temporarily" className="bg-yellow-600 
                    hover:bg-yellow-700 ml-3 p-2 rounded-full text-gray-200"><GrHalt size={iconSize} /></button>
                    </section>
                    <section className="my-2">
                        <p className="text-pretty text-sm">Temporarily disables your account for a certain period of time. You can activate your account at anytime</p>
                    </section>
                </section>
                <section className="bg-zinc-950/[.09] p-2 rounded-md my-3">
                    <section className="flex items-center justify-between">
                        <p className="text-md font-bold">Delete Your Acccount Permanently</p>
                        <button type="submit" title="Delete Account Permanently" className="bg-red-600 
                    hover:bg-red-700 ml-3 p-2 rounded-full text-gray-200"><BiTrash size={iconSize} /></button>
                    </section>
                    <section className="my-2">
                        <p className="text-pretty text-sm">Permanently deletes your account along with all your data. Please proceed with cautiion.</p>
                    </section>
                </section>
            </form>
        </div>
    )
}
export default AccountDanger;