import { Popover, Transition, Menu } from "@headlessui/react";
import classNames from "classnames";
import { Fragment } from "react";
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";


export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="bg-white h-16 px-4 flex justify-between items-center">
            <div className="relative">
                <HiOutlineSearch fontSize={20} className="absolute text-gray-400 top-1/2 -translate-y-1/2 left-3 cursor-pointer" />
                <input type="text" placeholder="Search..." className="text-sm focus:outline-none active:outline-none h-10 w-[24rem] border border-gray-300 rounded-sm pl-11" />
            </div>
            <div className="flex items-center gap-2 mr-2">
                <Popover className='relative'>
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of the chevron icon. */
                        <>
                            <Popover.Button className={classNames(open && 'bg-gray-100', 'rounded-sm-1.5 inline-flex items-center text-gray-700 hover:text-opacity-300 focus:outline-none active:bg-gray-100')}>
                                <HiOutlineChatAlt fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="font-gray-700 font-medium">Messages</strong>
                                        <div className="mt-2 py-1 text-sm">
                                            This is message
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <Popover className='relative'>
                    {({ open }) => (
                        /* Use the `open` state to conditionally change the direction of the chevron icon. */
                        <>
                            <Popover.Button className={classNames(open && 'bg-gray-100', 'rounded-sm-1.5 inline-flex items-center text-gray-700 hover:text-opacity-300 focus:outline-none active:bg-gray-100')}>
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Popover.Panel className='absolute right-0 z-10 mt-2.5 w-80'>
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="font-gray-700 font-medium">Notifications</strong>
                                        <div className="mt-2 py-1 text-sm">
                                            This is notifications
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>

                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="ml-2 inline-flex focus-outline-none focus-ring-2 focus:ring-neutral-400">
                            <div className="h-10 w-10 rounded-full g-sky-500 bg-cover bg-no-repeat bg-center" style={{ background: 'url("https://source.unsplash.com/80x80?face")' }}>
                                <span className='sr-only'>test user</span>
                            </div>

                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus-outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div className={classNames(active && 'bg-gray-100',"text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2")} onClick={() => navigate('/profile')}>
                                        Your Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div className={classNames(active && 'bg-gray-100',"text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2")} onClick={() => navigate('/setting')}>
                                        Settings
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div className={classNames(active && 'bg-gray-100',"text-gray-700 focus:bg-gray-200 cursor-pointer rounded-sm px-4 py-2")} onClick={() => navigate('/logout')}>
                                        Sign Out
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>


            </div>
        </div>
    )
}