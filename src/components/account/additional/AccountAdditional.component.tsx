import Input from "../../../modules/input/Input.module";

const AccountAdditional = () => {
    return (
        <div>
            <h1 className="text-center font-bold text-2xl">Additional Information</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                <div>
                    <div className="mb-2">
                        <form action="" className="bg-zinc-400/[.09] rounded-xl p-2 hover:-translate-y-1 transition-transform transition-colors ease-in-out duration-300 p-2 rounded-md p-2 rounded-md">
                            <h3 className="text-[18px] text-center font-semibold mb-5">More About You</h3>
                            <section>
                                <Input name="account_user_phone" type="account-phone" placeholder="Your Phone Number  ..." />
                                <Input name="account_user_address" type="account-address" placeholder="Your Address ..." />
                                <Input name="account_user_location" type="account-location" placeholder="Your Location ..." />
                                <Input name="account_user_company" type="account-company" placeholder="Your Company ..." />
                                <Input name="account_user_website" type="account-website" placeholder="Your Website ..." />
                            </section>
                            <section className="text-center mt-5 mb-3">
                                <button disabled={true} className="disabled:opacity-95 bg-blue-600 disabled:hover:bg-blue-600 disabled:hover:cursor-not-allowed hover:bg-blue-700 transition-colors px-3 py-1 rounded-full text-slate-200">Save Changes</button>
                            </section>
                        </form>
                    </div>
                    <div>
                        <form className="bg-zinc-400/[.09] rounded-xl p-2 hover:-translate-y-1 transition-transform transition-colors ease-in-out duration-300 p-2 rounded-md p-2 rounded-md" action="">
                            <h3 className="text-[18px] text-center font-semibold mb-5">Social Media Profiles</h3>
                            <section>
                                <Input
                                    name="account_user_facebook_profile"
                                    type="account-facebook"
                                    placeholder="Facebook Profile ..."
                                />
                                <Input
                                    name="account_user_instagram_profile"
                                    type="account-instagram"
                                    placeholder="Instagram Profile ..."
                                />
                                <Input
                                    name="account_user_x_profile"
                                    type="account-x"
                                    placeholder="X Profile ..."
                                />
                                <Input
                                    name="account_user_telegram_profile"
                                    type="account-telegram"
                                    placeholder="Telegram Profile ..."
                                />
                                <Input
                                    name="account_user_slack_profile"
                                    type="account-slack"
                                    placeholder="Slack Profile ..."
                                />
                                <Input
                                    name="account_user_skype_profile"
                                    type="account-skype"
                                    placeholder="Skype Profile ..."
                                />
                            </section>
                            <section className="text-center mt-5 mb-3">
                                <button disabled={true} className="disabled:opacity-95 bg-blue-600 disabled:hover:bg-blue-600 disabled:hover:cursor-not-allowed hover:bg-blue-700 transition-colors px-3 py-1 rounded-full text-slate-200">Save Changes</button>
                            </section>
                        </form>
                    </div>
                </div>
                <div>
                    <div className="mb-2">
                        <form className="bg-zinc-400/[.09] rounded-xl p-2 hover:-translate-y-1 transition-transform transition-colors ease-in-out duration-300 p-2 rounded-md p-2 rounded-md" action="">
                            <h3 className="text-[18px] text-center font-semibold mb-5">Secondary Email</h3>
                            <section>
                                <Input
                                    name="account_user_secondary_email"
                                    type="account-email"
                                    placeholder="Secondary Email Address  ..."
                                />
                                <Input
                                    name="account_user_verify_secondary_email"
                                    type="account-verify"
                                    placeholder="Verify Email ..."
                                />
                            </section>
                            <section className="text-center mt-5 mb-3">
                                <button disabled={true} className="disabled:opacity-95 bg-blue-600 disabled:hover:bg-blue-600 disabled:hover:cursor-not-allowed hover:bg-blue-700 transition-colors px-3 py-1 rounded-full text-slate-200">Save Changes</button>
                            </section>
                        </form>
                    </div>
                    <div className="mb-2">
                        <form className="bg-zinc-400/[.09] rounded-xl p-2 hover:-translate-y-1 transition-transform transition-colors ease-in-out duration-300 p-2 rounded-md p-2 rounded-md" action="">
                            <h3 className="text-[18px] text-center font-semibold mb-5">Add a Bio</h3>
                            <section>
                                <Input
                                    textarea="true"
                                    name="account_user_bio"
                                    type="account-bio"
                                    placeholder="Write Your Exclusive Bio ..."
                                    maxLength={250}
                                    height="110px"
                                    fixed="true"
                                />
                            </section>
                            <section className="text-center mt-5 mb-3">
                                <button disabled={true} className="disabled:opacity-95 bg-blue-600 disabled:hover:bg-blue-600 disabled:hover:cursor-not-allowed hover:bg-blue-700 transition-colors px-3 py-1 rounded-full text-slate-200">Save Changes</button>
                            </section>
                        </form>
                    </div>
                    <div>
                        <form className="bg-zinc-400/[.09] rounded-xl p-2 hover:-translate-y-1 transition-transform transition-colors ease-in-out duration-300 p-2 rounded-md p-2 rounded-md" action="">
                            <h3 className="text-[18px] text-center font-semibold mb-5">Notepad</h3>
                            <section>
                                <Input
                                    textarea="true"
                                    name="account_user_note"
                                    type="account-note"
                                    placeholder="Write Your Notes ..."
                                    maxLength={5000}
                                    height="132px"
                                    fixed="true"
                                />
                            </section>
                            <section className="text-center mt-5 mb-3">
                                <button disabled={true} className="disabled:opacity-95 bg-blue-600 disabled:hover:bg-blue-600 disabled:hover:cursor-not-allowed hover:bg-blue-700 transition-colors px-3 py-1 rounded-full text-slate-200">Save Changes</button>
                            </section>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AccountAdditional;