import { Switch } from '@headlessui/react'
import { useState } from 'react'

const SwitchButton = () => {
    const [ enabled , setEnabled ] = useState(false);

    return (
        <Switch
            title="Suspend Account Temporarily"
            checked={enabled}
            onChange={setEnabled}
            className="group relative flex h-5 w-10 cursor-pointer rounded-full bg-gray-500 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-blue-500"
        >
            <span
                aria-hidden="true"
                className="pointer-events-none inline-block size-3 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-5"
            />
        </Switch>
    )
}

export default SwitchButton;