import { FaRegUserCircle, FaGlobe, FaRegEnvelope, FaLock, FaUserSecret, FaRegClipboard } from "react-icons/fa";
import { TbPasswordFingerprint } from "react-icons/tb";
import './input.module.scss';

const iconSize = 24

const Input = (props: any) => {
    return (
        <div className="flex items-start justify-between my-2 rounded-md">
            <div className="w-8 h-9 px-1 flex items-center justify-center rounded-md">
                {
                    props.type === "url" && <FaGlobe size={iconSize} />
                }
                {
                    props.type === "username" && <FaRegUserCircle size={iconSize} />
                }
                {
                    props.type === "email" && <FaRegEnvelope size={iconSize} />
                }
                {
                    props.type === "password" && <FaLock size={iconSize} />
                }
                {
                    props.type === "key" && <FaUserSecret size={iconSize} />
                }
                {
                    props.type === "pin" && <TbPasswordFingerprint size={iconSize} />
                }
                
            </div>
            <div className="w-full">
                { 
                    props.textarea && 
                    <textarea placeholder={props.placeholder} name="backup" id="" className="bg-transparent px-2 resize-y w-full rounded-md border outline-none border-none focus:shade p-1" style={{minHeight: '32px', maxHeight: '200px'}}></textarea> 
                }
                {
                    !props.textarea && 
                    <input draggable="false" type="text" name={props.name} placeholder={props.placeholder} className="bg-transparent px-2 w-full rounded-md border outline-none border-none p-1 h-9" />
                }
                
            </div>
            <div className="=w-full mr-2">
                <button type="button" className="h-9 p-1 rounded-md"><FaRegClipboard size={iconSize - 8} /></button>
            </div>
        </div>
    )
}

export default Input;