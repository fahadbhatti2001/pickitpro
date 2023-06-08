import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import moment from 'moment';
import React from 'react'

export const Navbar = () => {

    const date = moment().format("MMMM, Do YYYY");

    return (
        <div className="py-5 border-b mb-4 w-full flex justify-end items-center font-medium text-zinc-500">
            <h1 className="flex items-center gap-1">
                <CalendarDaysIcon className="w-8 h-8 p-1.5 rounded-full" />
                {date}
            </h1>
        </div>
    )
}
