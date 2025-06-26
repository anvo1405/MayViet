import React from 'react'

const NotFoundLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default NotFoundLayout
