import { useEffect, useRef, useState } from 'react'

export default function DDSelect (children) {
  const { name } = children
  const [selectedOption, setselectedOption] = useState('Select an option')
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
  const handleOption = (event) => {
    setselectedOption(event.target.value)
  }

  return (
    <div>
      <div className='flex flex-col relative'>
        <div ref={inputRef} onClick={handleClick} className='bg-gray-800 border border-gray-600 rounded w-56 p-1 text-center text-gray-400 cursor-pointer after:absolute after:right-4 after:top-3 after:w-2 after:h-2 after:border-white after:border-solid after:border-b-2 after:border-r-2 after:rounded-sm after:rotate-45'>
          {selectedOption}
        </div>
        <div className={`${!isOpen ? 'hidden' : 'absolute top-9'} w-full bg-gray-900 border border-gray-700 rounded`}>
          {children.children.map((props, index) => (
            <label key={index} htmlFor={props.props.name} className='flex justify-center p-2 text-center cursor-pointer hover:bg-gray-700'>
              <input type='radio' className='hidden' name={name} onChange={handleOption} id={props.props.value} value={props.props.text} />
              <div>
                {props.props.text}
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
