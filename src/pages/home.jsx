import { DashboardLayout, Home, Sidebar } from '@/Components'
import React from 'react'

export default function Admin() {
  return (
    <>
      <Sidebar />
      <DashboardLayout>
        <Home />
      </DashboardLayout>
    </>
  )
}
