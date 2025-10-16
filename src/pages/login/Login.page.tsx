import { Link } from "react-router-dom";
import Input from "../../modules/input/Input.module";
import ThemeSwitch from "../../modules/theme-switch/ThemeSwitch.module";

const LoginPage = () => {
    return (
        <div>
            <div className="p-4 flex items-center justify-center mt-10">
                <form action="" name="login-form" className="relative shade rounded-lg w-96 h-96 p-2 flex flex-col justify-between">
                    <span className="absolute top-3.5 right-1">
                        <ThemeSwitch />
                    </span>
                    <section>
                        <h1 className="text-center text-3xl mb-9 mt-2">Login</h1>
                        <Input type="account-email" name="account_login_email" placeholder="Email..." />
                        <Input type="account-password" name="account_login_password" placeholder="Password..." password="true" />
                    </section>

                    <section className="flex flex-col items-start ml-2 font-bold">
                        <Link type="button" to="/" className="text-gray-600 hover:text-gray-700">Back to Home</Link>
                        <Link type="button" to="/register" className="text-green-600 hover:text-green-700">New Here ? Register</Link>
                        <Link type="button" to="/forgot-password" className="text-red-600 hover:text-red-700">Forgot Password ? Reset</Link>
                    </section>
                    <section className="text-center mb-2">
                        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-gray-200 px-5 py-1.5 text-xl rounded-full">Login</button>
                    </section>
                </form>

            </div>
        </div>
    )
}
export default LoginPage;