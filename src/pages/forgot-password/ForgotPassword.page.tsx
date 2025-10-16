import Input from "../../modules/input/Input.module";
import ThemeSwitch from "../../modules/theme-switch/ThemeSwitch.module";


const ForgotPasswordPage = () => {
    return (
        <div>
            <div className="p-4 flex items-center justify-center mt-32">
                <form action="" name="login-form" className="relative shade rounded-lg w-96 min-h-48 p-2 flex flex-col justify-between">
                    <span className="absolute top-3.5 right-0.5">
                        <ThemeSwitch />
                    </span>
                    <section>
                        <h1 className="text-center text-3xl mb-9 mt-2">Get an Email</h1>
                        <section className="">
                            <Input
                                type="account-email"
                                name="account_reset_password_from_email"
                                placeholder="Enter Your Email Address..."
                            />
                        </section>

                    </section>
                    <section className="text-center mb-2">
                        <button type="submit" className="bg-amber-400 text-stone-900 px-4 py-1 text-xl rounded-full">Get Link</button>
                    </section>
                </form>
            </div>
        </div>
    )
}
export default ForgotPasswordPage;