import React from 'react'
import { ArrowLeftOnRectangleIcon, TruckIcon } from '@heroicons/react/24/solid'

export const Sidebar = () => {
    return (
        <div className="relative bg-yellow-50 overflow-hidden max-h-screen">
            <div className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex-grow">
                        <div className="px-4 py-6 text-center border-b">
                            <img src="/logo.svg" className="w-40" />
                        </div>
                        <div className="p-4">
                            <ul className="space-y-1">
                                <li>
                                    <a href="#" className="flex items-center bg-orange-100 gap-2 rounded-md font-bold text-sm text-primary-1 py-3 px-4 outline-none hover:bg-orange-100">
                                        <TruckIcon className="w-6 h-6" />
                                        Vehicles
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 rounded-md font-bold text-sm text-zinc-800 py-3 px-4 outline-none hover:bg-orange-100">
                                        <TruckIcon className="w-6 h-6" />
                                        Vehicles
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center gap-2 rounded-md font-bold text-sm text-zinc-800 py-3 px-4 outline-none hover:bg-orange-100">
                                        <TruckIcon className="w-6 h-6" />
                                        Vehicles
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4">
                        <button onClick={() => ""} type="button" href="#" className="w-full flex items-center gap-2 rounded-md font-bold text-sm text-zinc-800 py-3 px-4 outline-none hover:bg-orange-100">
                            <ArrowLeftOnRectangleIcon className="w-6 h-6" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
