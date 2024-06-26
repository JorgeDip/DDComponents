import { DDCheckbox } from './components/Checkbox'
import { RadioGropupInput } from './components/RadioGroup'

export default function CheckboxRadioSection () {
  return (
    <section className='section'>
      <h2 className='section-header'>
        Checkboxes & Radio Buttons
      </h2>
      <div className='section-body'>

        <div className='flex gap-2'>
          <DDCheckbox name='test' value='TEST' checked>
            Checkbox
          </DDCheckbox>

          <DDCheckbox name='test' value='TEST'>
            Checkbox
          </DDCheckbox>
        </div>

        <div className='flex flex-col gap-y-4 p-4 border border-gray-700'>
          <RadioGropupInput name='option' className='flex gap-2'>
            <span
              value='option-1'
              label='First Choice'
            />
            <span
              value='option-2'
              label='Second Choice'
            />
            <span
              value='option-3'
              label='Third Choice'
            />
          </RadioGropupInput>

          <RadioGropupInput name='option2' className='flex gap-2'>
            <span
              value='option-4'
              label='First Choice'
            />
            <span
              value='option-5'
              label='Second Choice'
            />
            <span
              value='option-6'
              label='Third Choice'
            />
          </RadioGropupInput>
        </div>

      </div>
    </section>
  )
}
