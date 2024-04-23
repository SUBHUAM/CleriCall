import { StreamVideoProvider } from '@/providers/StreamClientProvider';
import React from 'react'

export const metadata = {
  title: "CleriCall Video",
  description: "Video conferencing app",
  icons:{
    icon:'/icons/clericall.png'
  }
};

function Rootlayout({children}) {
  return (
    <main>
    <StreamVideoProvider>
    {children}
    </StreamVideoProvider>
    </main>
  )
}

export default Rootlayout;