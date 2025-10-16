// Icons & Assets
import { 

    FaRegUser, 
    FaRegUserCircle, 
    FaGlobe, 
    FaRegEnvelope, 
    FaLock, 
    FaUserSecret, 
    FaRegClipboard, 
    FaMobileAlt,
    FaRegEye,
    FaHome

} from "react-icons/fa";

import { 

    PiTelegramLogoBold, 
    PiInstagramLogo,
    PiXLogoFill,
    PiSkypeLogoFill,
    PiSlackLogoDuotone

} from "react-icons/pi";

import { 

    BsEnvelope, 
    BsTextParagraph, 
    BsBuildingsFill 

} from "react-icons/bs";

import { 

    TbPasswordFingerprint, 
    TbAlphabetLatin,
    TbEyeClosed

} from "react-icons/tb";

import { 

    FaPhone, 
    FaLocationDot,
    FaRegNoteSticky

} from "react-icons/fa6";

import { IoIosGlobe } from "react-icons/io";
import { MdOutlineNumbers } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { BiLogoFacebook } from "react-icons/bi";

import { useState } from "react";



const iconSize = 24

const Input = (props: any) => {
    const [ passwordVisible, setPasswordVisible ] = useState(false);

    return (
        <div className="flex items-start justify-between my-2 rounded-md">
            <div className="w-8 h-9 px-1 flex items-center justify-center rounded-md">
                { props.type === "url" && <FaGlobe size={iconSize} /> }
                { props.type === "username" && <FaRegUserCircle size={iconSize} /> }
                { props.type === "email" && <FaRegEnvelope size={iconSize} /> }
                { props.type === "password" && <FaLock size={iconSize} /> }
                { props.type === "key" && <FaUserSecret size={iconSize} /> }
                { props.type === "pin" && <TbPasswordFingerprint size={iconSize} /> }

                { props.type === "account-name" && <TbAlphabetLatin size={iconSize} /> }
                { props.type === "account-username" && <FaRegUser size={iconSize} /> }
                { props.type === "account-email" && <BsEnvelope size={iconSize} /> }
                { props.type === "account-password" && <CiLock size={iconSize} /> }
                { props.type === "account-otp" && <FaMobileAlt size={iconSize} /> }
                { props.type === "account-verify" && <MdOutlineNumbers size={iconSize} /> }

                { props.type === "account-address" && <FaHome size={iconSize} /> }
                { props.type === "account-company" && <BsBuildingsFill size={iconSize} /> }
                { props.type === "account-location" && <FaLocationDot size={iconSize} /> }
                { props.type === "account-phone" && <FaPhone size={iconSize - 4} /> }
                { props.type === "account-website" && <IoIosGlobe size={iconSize} /> }
                { props.type === "account-bio" && <BsTextParagraph size={iconSize} /> }
                { props.type === "account-note" && <FaRegNoteSticky size={iconSize} /> }

                { props.type === "account-facebook" && <BiLogoFacebook size={iconSize} /> }
                { props.type === "account-instagram" && <PiInstagramLogo size={iconSize} /> }
                { props.type === "account-x" && <PiXLogoFill size={iconSize} /> }
                { props.type === "account-slack" && <PiSlackLogoDuotone size={iconSize} /> }
                { props.type === "account-skype" && <PiSkypeLogoFill size={iconSize} /> }
                { props.type === "account-telegram" && <PiTelegramLogoBold size={iconSize} /> }
                
            </div>
            <div className="w-full">
                { 
                    props.textarea && 
                    <textarea placeholder={props.placeholder} name="backup" className="bg-transparent px-2 resize-y w-full rounded-md border outline-none border-none p-1 focus:bg-zinc-950/[.09] placeholder:text-color" style={{minHeight: props.height ? props.height : '32px', maxHeight: props.fixed ? props.height : '200px'}} maxLength={(props.maxLength) ? props.maxLength : 524288}></textarea> 
                }
                {
                    !props.textarea && 
                    <input draggable="false" type={passwordVisible ? "text" : "password"} name={props.name} placeholder={props.placeholder} className="bg-transparent px-2 w-full rounded-md border outline-none border-none p-1 h-9 focus:bg-zinc-950/[.09] placeholder:text-color" />
                }
                
            </div>
            <div className="=w-full mr-2">
                {
                    props.password && 
                    <button type="button" className="h-9 p-1 rounded-md" onClick={() => setPasswordVisible(!passwordVisible)}>
                        {
                            passwordVisible && <FaRegEye size={iconSize - 8} />
                        }
                        {
                            !passwordVisible && <TbEyeClosed size={iconSize - 8} />
                        }
                        
                    </button>
                }
                {
                    props.copy && <button type="button" className="h-9 p-1 rounded-md"><FaRegClipboard size={iconSize - 8} /></button>
                }
                
            </div>
        </div>
    )
}

export default Input;