type SpeedTestControlsProps = {
  isPaused: boolean
  onTogglePause: () => void
  speed: number
  onChangeSpeed: (speed: number) => void
}

const SPEED_STEP = 10
const MINIMUM_SPEED = 10

export default function SpeedTestControls({
  isPaused,
  onTogglePause,
  speed,
  onChangeSpeed,
}: SpeedTestControlsProps) {
  return (
    <aside
      aria-label='Speed test admin controls'
      className='mt-4 flex items-center gap-2 rounded-xl bg-white p-3 text-black shadow-lg'
    >
      <button
        type='button'
        onClick={onTogglePause}
        className='rounded-md bg-slate-200 px-3 py-2 font-semibold'
      >
        {isPaused ? 'Resume' : 'Pause'}
      </button>
      <button
        type='button'
        aria-label='Decrease scroll speed'
        onClick={() =>
          onChangeSpeed(Math.max(MINIMUM_SPEED, speed - SPEED_STEP))
        }
        className='rounded-md bg-slate-200 px-3 py-2 font-semibold'
      >
        −
      </button>
      <span className='min-w-[5rem] text-center font-semibold'>
        {speed} WPM
      </span>
      <button
        type='button'
        aria-label='Increase scroll speed'
        onClick={() => onChangeSpeed(speed + SPEED_STEP)}
        className='rounded-md bg-slate-200 px-3 py-2 font-semibold'
      >
        +
      </button>
    </aside>
  )
}
