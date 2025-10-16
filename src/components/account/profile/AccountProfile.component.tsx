// Icons & Images -- Assets 
import { FaCamera } from "react-icons/fa";
import { TbAlphabetLatin } from "react-icons/tb";
import ProfilePlaceholder from './../../../assets/img/profile.png';

const AccountProfile = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">Profile</h1>
            <div className="flex items-center flex-col">
                <div className="flex items-center flex-col">
                    <form action="" name="account-profile-form" className="">
                        <section className="relative shadow-lg shadow-gray-500/50 bg-gray-600 w-64 h-64 rounded-full my-3">
                            <img src={ProfilePlaceholder} alt="Profile Image" className="w-full h-full bg-zinc-300 rounded-full" />
                            <label htmlFor="account-profile-image" className="cursor-pointer z-10 absolute bottom-5 right-5">
                                <section className="text-gray-200 bg-blue-600 hover:bg-blue-700 transition-colors rounded-full p-2 ">
                                    <FaCamera size={24} />
                                </section>

                            </label>
                            <input type="file" id="account-profile-image" name="account_profile_picture" className="hidden" />

                        </section>
                    </form>
                </div>
                <div className="my-4 px-4 font-semibold text-lg">
                    <section className="flex items-center">
                        <p>Foster Z, 19</p>
                    </section>
                    <section>
                        <p>West Bengal, India</p>
                    </section>
                    <section>
                        <p>Joined on 24th December, 2024</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
export default AccountProfile;