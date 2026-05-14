import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router'

function RootLayout() {
  return (
    <div>
        <Header />
        <div style={{ minHeight: '80vh', padding: '0 40px' }}>
          <Outlet />
        </div>
        <Footer />
    </div>
  )
}

export default RootLayout