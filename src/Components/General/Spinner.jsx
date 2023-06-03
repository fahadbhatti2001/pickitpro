import React from 'react'

export const Spinner = (props) => {
    let { isSpinning } = props

    return (
        <>
            {isSpinning ?
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 overflow-x-hidden overflow-y-auto z-[999]">
                    <div className="flex justify-center items-center">
                        <span className="relative flex h-10 w-10">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-1 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-10 w-10 bg-primary-1"></span>
                        </span>
                    </div>
                </div>
                : ''}
        </>
    )
}