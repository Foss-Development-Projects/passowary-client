import CheckboxButton from "../../../modules/checkbox-button/CheckboxButton.module";
import { FaPlus, FaRegTrashAlt, FaSortAlphaUpAlt } from 'react-icons/fa'
const Toolbar = () => {
    return (
        <div className="shade rounded-md mx-2 pl-2.5 px-1 py-1 flex items-center justify-between">
            <CheckboxButton />
            <div className="mr-0.5 text-white">
                <button className="bg-amber-600 p-1 rounded-full mx-0.5"><FaSortAlphaUpAlt /></button>
                <button className="bg-green-600 p-1 rounded-full mx-0.5"><FaPlus /></button>
                <button className="bg-red-600 p-1 rounded-full mx-0.5"><FaRegTrashAlt /></button>
            </div>
        </div>
    )
}
export default Toolbar;