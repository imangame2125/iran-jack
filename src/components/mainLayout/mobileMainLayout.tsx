import { FC, PropsWithChildren } from 'react'

import Navbar from '../navbar/Navbar'

const MobileMainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex flex-col'>
      <div className='bottom-0 bg-white left-0 right-0 z-10 fixed h-15'>
        <Navbar />
      </div>
      <main className='w-full'>{children}</main>
    </div>
  )
}

export default MobileMainLayout
