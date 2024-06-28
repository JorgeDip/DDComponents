import { useState } from 'react'
import DDSelect from './components/Select'

export default function CheckboxRadioSection () {
  const [SelectItem, setselectedItem] = useState('')

  const SelectOption = [{
    value: 'First',
    text: 'First option'

  },
  {
    value: 'Second',
    text: 'Second option'

  },
  {
    value: 'Third',
    text: 'Third option'

  },
  {
    value: 'Fourth',
    text: 'Fourth option'

  },
  {
    value: 'Fifth',
    text: 'Fifth option'

  }]

  const handleOption = (event) => {
    const OptionValue = event.target.getAttribute('data-value')
    setselectedItem(OptionValue)
  }

  return (
    <section className='section'>
      <h2 className='section-header'>
        Select
      </h2>
      <div className='section-body flex flex-col'>

        <DDSelect name='testing' options={SelectOption} selectedItem={SelectItem} handleOption={handleOption} />

        <div className='w-full flex flex-col items-center'>Selected item: <strong>{SelectItem}</strong></div>
      </div>

    </section>
  )
}
