import { Link } from "react-router-dom";
import Input from "../../modules/input/Input.module";
import ThemeSwitch from "../../modules/theme-switch/ThemeSwitch.module";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
const RegisterPage = () => {
    return (
        <div>
            <div className="p-4 flex items-center justify-center mt-10">
                <form action="" name="login-form" className="relative shade rounded-lg w-96 min-h-96 p-2 flex flex-col justify-between">
                    <span className="absolute top-3.5 right-0.5">
                        <ThemeSwitch />
                    </span>
                    <section>
                        <h1 className="text-center text-3xl mb-9 mt-2">Register</h1>
                        <Input type="account-name" name="account_register_name" placeholder="Fullname..." />
                        <Input type="account-username" name="account_register_username" placeholder="Username..." />
                        <Input type="account-email" name="account_register_email" placeholder="Email..." />
                        <Input type="account-password" name="account_register_password" placeholder="Password..." password="true" />
                    </section>

                    <section className="flex flex-col items-start ml-2 font-bold mt-5 mb-10">
                        <Link type="button" className="flex items-center hover:text-gray-700 transition-colors" to="/">
                            <IoHomeOutline className="mr-1" />
                            Back to Home
                        </Link>
                        <Link type="button" className="flex items-center hover:text-gray-700 transition-colors" to="/login">
                            <CiLogin className="mr-1" />
                            Been here before ? Login
                        </Link>
                    </section>
                    <section className="text-center mb-2">
                        <button type="submit" className="bg-amber-400 px-5 py-1.5 text-xl rounded-full">Register</button>
                    </section>
                </form>

            </div>
        </div>
    )
}
export default RegisterPage;