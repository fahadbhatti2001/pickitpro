import React from 'react'
import { Navbar } from "@/Components";


export const Home = () => {
    return (
        <div className="ml-60 h-screen overflow-auto">
            <div className="px-6">
                <div className="mx-auto">
                    <div className="bg-white rounded-3xl">
                        <Navbar />
                    </div>
                </div>
            </div>
        </div>
    )
}
