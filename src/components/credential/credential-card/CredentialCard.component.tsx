//  Libraries & Packages
import { FaXmark, FaAngleDown } from "react-icons/fa6";
import { FaPenAlt, FaEye } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { FaLock, FaUnlock } from "react-icons/fa";
//  Custom Components

import CheckboxButton from "../../../modules/checkbox-button/CheckboxButton.module";
import Input from "../../../modules/input/Input.module";
import { useState } from "react";

const CredentialCard = (props: any) => {
    const [lock, setLock] = useState(true);

    return (
        <li className='bg-zinc-400/[.09] overflow-clip shadow-2xl shadow-gray-800/20 rounded-xl p-2 mb-4 hover:-translate-y-1 transition-transform transition-colors transition-height ease-in-out duration-300 bg-gradient-to-bl from-blue-500/[.09]'>
            <section className="text-right">
                <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center">
                        <div className="flex items-center justify-between text-slate-200 p-1 rounded-full">
                            <CheckboxButton />
                            <span className="flex items-center justify-between p-1 rounded-full ml-2">
                                {
                                    lock && <FaLock className="text-red-500" />
                                }
                                {
                                    !lock && <FaUnlock className="text-green-500" />
                                }
                            </span>


                        </div>
                    </div>

                    <div className="flex items-center justify-between text-white my-1">
                        <button onClick={() => setLock(!lock)} className="rounded-full bg-blue-700 p-1 mx-0.5 hover:bg-blue-900 transition-colors">
                            {
                                lock && <FaEye />
                            }
                            {
                                !lock && <FaEye />
                            }
                        </button>
                        <button className="rounded-full bg-stone-700 p-1 mx-0.5 hover:bg-stone-900 transition-colors">
                            <FaAngleDown />
                        </button>
                        <button className="rounded-full bg-orange-300 p-1 mx-0.5 hover:bg-orange-500 transition-colors">
                            <BiEditAlt />
                        </button>
                        <button className="rounded-full bg-red-500 p-1 mx-0.5 hover:bg-red-700 transition-colors">
                            <FaXmark />
                        </button>
                    </div>
                </div>
            </section>
            <header className='flex items-start'>
                <img src={props.icon} alt="Card Logo" className='h-8 w-8' />
                <form className='text-xl font-bold pl-2 text-left'>
                    {props.title}
                    <button className="ml-1 bg-gray-800/[.09] p-1 rounded-full hover:bg-zinc-900 hover:text-white">
                        <FaPenAlt size={14} />
                    </button>
                </form>
            </header>
            <form className="py-2" name="credential-form">
                <Input
                    placeholder="Website Address"
                    type="url"
                    id="credential_website_url"
                    copy="true"
                />
                <Input
                    placeholder="Username"
                    type="username"
                    id="credential_username"
                    copy="true"
                />
                <Input
                    placeholder="Email Address"
                    type="email"
                    id="credential_email"
                    copy="true"
                />
                <Input
                    placeholder="Password"
                    type="password"
                    id="credential_password"
                    copy="true"
                />
                <Input
                    placeholder="Pin Combination if Any ..."
                    type="pin"
                    id="credential_pin"
                    copy="true"
                />
                <Input
                    placeholder="Enter Backup Codes / Private Keys etc ..."
                    textarea="true"
                    type="key"
                    id="credential_key"
                    copy="true"
                />
                <section>
                    <button disabled={false} className="disabled:opacity-95 bg-green-600 disabled:hover:bg-green-600 hover:bg-green-700 transition-colors px-5 py-1.5 rounded-full text-slate-200">Update</button>
                </section>
            </form>
        </li>
    )
}

export default CredentialCard;