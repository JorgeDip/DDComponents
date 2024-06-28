import { useEffect, useRef, useState } from 'react'

export default function DDSelect (children) {
  const { options, name, handleOption, selectedItem } = children

  const [isOpen, setisOpen] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setisOpen(false)
      }
    }

    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  })

  const handleClick = () => {
    setisOpen(!isOpen)
  }

  return (
    <div>
      <div className='flex flex-col relative'>
        <div role='sele' ref={inputRef} onClick={handleClick} className='bg-gray-800 border border-gray-600 rounded w-56 p-1 text-center text-gray-400 cursor-pointer after:absolute after:right-4 after:top-3 after:w-2 after:h-2 after:border-white after:border-solid after:border-b-2 after:border-r-2 after:rounded-sm after:rotate-45'>
          {selectedItem || 'Select an option'}
        </div>
        <div role='listbox' className={`${!isOpen ? 'hidden' : 'absolute top-9'} w-full bg-gray-900 border border-gray-700 rounded`} aria-expanded={isOpen}>
          {options?.map((props, index) => (
            <div key={index} className='text-center'>
              <div className='p-2 w-full text-center cursor-pointer hover:bg-gray-700' role='option' name={name} onClick={handleOption} data-value={props.text} aria-selected={selectedItem === props.text}>
                {props.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
