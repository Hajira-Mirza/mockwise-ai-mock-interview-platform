import Logo from '@/components/Logo'
import React, { ReactNode } from 'react'

const RootLayout = ({ children }: { children: ReactNode}) => {
  return (
    <div className="root-layout">
      <nav>
        <Logo />
      </nav>
      {children}</div>
  )
}

export default RootLayout