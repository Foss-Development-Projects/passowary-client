import SwitchButton from "../../../modules/switch-button/SwitchButton.module";

const AccountNotification = () => {
    const data = [
        {
            title: "Send Email Notifications",
            description: "Temporarily disables your account for a certain period of time. You can activate your account at anytime"
        },
        {
            title: "Delete Your Acccount Permanently",
            description: "Temporarily disables your account for a certain period of time. You can activate your account at anytime"
        }
    ]
    return (
        <div style={{ height: "calc(100vh - 225px)" }}>
            <h1 className="text-center font-bold text-2xl">Notification</h1>
            <form action="" name="account-delete-form" className="p-2 rounded-md" method="POST">
                {data.map((item, key) => {
                    return (
                        <section className="bg-zinc-950/[.09] p-2 rounded-md my-3" key={key}>
                            <section className="flex items-center justify-between">
                                <p className="text-md font-bold">{item.title}</p>
                                <SwitchButton />
                            </section>
                            <section className="my-2">
                                <p className="text-pretty text-sm">{item.description}</p>
                            </section>
                        </section>
                    )
                })}
            </form>
        </div>
    )
}
export default AccountNotification;