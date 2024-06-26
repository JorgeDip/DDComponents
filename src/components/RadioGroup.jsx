import { useState } from 'react'
import { DDRadio } from './Radio'

export function RadioGropupInput (children) {
  const [selectedInput, setSelectedInput] = useState(children.checked || '')

  const handleChange = (inputValue) => {
    setSelectedInput(inputValue)
  }

  return (
    <div className={children.className}>
      {children.children.map((props, index) => (
        <DDRadio
          key={index}
          name={children.name}
          value={props.props.value}
          label={props.props.label}
          isChecked={selectedInput === props.props.value}
          handleChange={handleChange}
        />))}

    </div>
  )
}
