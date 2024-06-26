import { useState } from 'react'

export function DDCheckbox (children) {
  const { name, value, checked } = children

  const [isChecked, setisChecked] = useState(checked || false)

  const handleCheckbox = () => {
    setisChecked(!isChecked)
  }

  return (
    <label className='flex items-center gap-x-2'>
      <input type='checkbox' name={name} value={value} className='hidden' checked={isChecked} readOnly />
      <span
        onClick={handleCheckbox} className={isChecked
          ? 'flex-shrink-0 relative bg-gray-600 w-6 h-6 rounded cursor-pointer after:absolute after:top-[3px] after:left-[10px] after:w-[6px] after:h-[14px] after:border-white after:border-solid after:border-b-2 after:border-r-2 after:rotate-45 transition'
          : 'flex-shrink-0 border-1 border-gray-700 w-6 h-6 bg-slate-300 rounded hover:bg-gray-400 transition cursor-pointer'}
      />
      <div className='cursor-pointer' onClick={handleCheckbox}>
        {children.children}
      </div>
    </label>
  )
}
