import { DashboardLayout, Sidebar, Feedback } from '@/Components'
import React from 'react'

export default function feedback() {
    return (
        <>
            <Sidebar />
            <DashboardLayout>
                <Feedback />
            </DashboardLayout>
        </>
    )
}
