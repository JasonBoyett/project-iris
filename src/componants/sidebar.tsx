import { useState } from 'react'


export default function Sidebar() {
  const [showing, setShowing] = useState<boolean>(true)

  function SideBarItem({ content, onClick }: { content: string, onClick: VoidFunction}) { 
    return (
      <div
        onClick={onClick}
        className="flex justify-center w-full"
      >
        {
          showing
            ? content
            : ''
        }
      </div>
    )
  }

  return (
    <div className='min-h-screen'>
      <div
        className={`absolute top-0 left-0 min-h-screen bg-gradient-to-br from-slate-600 to-slate-700 ${showing ? 'w-1/12' : 'w-6'}`}
      >
        hi
      </div>
    </div>
  )
}

