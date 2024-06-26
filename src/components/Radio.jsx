export function DDRadio (children) {
  const { name, label, value, isChecked, handleChange } = children

  const handleRadioChange = e => {
    const { id } = e.currentTarget
    handleChange(id)
  }

  return (
    <label htmlFor={value} className='flex items-center gap-x-2'>
      <input type='radio' name={name} id={value} value={value} className='hidden' onChange={handleRadioChange} checked={isChecked} readOnly />
      <span
        className={isChecked
          ? 'flex-shrink-0 relative bg-gray-600 w-5 h-5 rounded-full cursor-pointer after:absolute after:top-[5px] after:left-[8px] after:w-[4px] after:h-[9px] after:border-white after:border-solid after:border-b-2 after:border-r-2 after:rotate-45 transition'
          : 'flex-shrink-0 w-5 h-5 bg-slate-300 rounded-full hover:bg-gray-400 cursor-pointer'}
      />
      <div className='cursor-pointer'>
        {label}
      </div>
    </label>
  )
}
