import {
  useState,
  useRef,
  type SetStateAction
} from 'react'

type IncrementalState<T, stateful extends boolean> = {
  value: T
  incrementor: stateful extends true ? SetStateAction<T> : () => void 
  reset: stateful extends true ? SetStateAction<T> : () => void 
}
const useIncrementalState = <T>(
  initialValue: T,
  increment: (arg: T) => T,
  stateful = true
): IncrementalState<T, typeof stateful> => {
  const [value, setValue] = useState(initialValue)
  const valueRef = useRef(value)
  const incrementor = stateful
    ? setValue((previous) => increment(previous)) as SetStateAction<T>
    : () => valueRef.current = increment(valueRef.current)
  const reset = stateful
    ? () => setValue(initialValue)
    : () => valueRef.current = initialValue
  return {
    value: stateful ? value : valueRef.current,
    incrementor,
    reset,
  }
}
export default useIncrementalState
