import { DashboardLayout, Sidebar, Vehicles } from '@/Components'
import React from 'react'

export default function vehicles() {
    return (
        <>
            <Sidebar />
            <DashboardLayout>
                <Vehicles />
            </DashboardLayout>
        </>
    )
}
