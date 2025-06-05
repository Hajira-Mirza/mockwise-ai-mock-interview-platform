import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className="flex flex-row gap-2">
              <Image src="/logo.svg" alt="Logo" height={28} width={34} />
              <h3 className="text-primary-100">
                Mock<span className="text-indigo-700">Wise</span>
              </h3>
            </div>
  )
}

export default Logo