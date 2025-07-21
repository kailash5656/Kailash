import React from 'react'
import { Outlet } from 'react-router-dom'
import DayNavigation from './Day 7/Components/DayNavigation'

export default function Layout() {
  return (
    <div>
    <DayNavigation />
    <Outlet />
    </div>
  )
}
