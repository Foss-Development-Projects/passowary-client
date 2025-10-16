import { Checkbox } from '@headlessui/react'
import { IoCheckmark } from "react-icons/io5";

const CheckboxButton = () => {
    return (
        <Checkbox
            className="group size-6 rounded-full bg-zinc-950/[.09] p-1 ring-1 ring-white/15 ring-inset data-[checked]:bg-blue-600 hover:shadow hover:shadow-sm shadow-red-500"
            title='Check'
        >
            <IoCheckmark className="hidden size-4 text-white group-data-[checked]:block" />
        </Checkbox>
    )
}
export default CheckboxButton;