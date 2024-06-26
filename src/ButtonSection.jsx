import { DDButton, DDButtonCustom } from './components/Buttons'

export default function ButtonSection () {
  return (
    <section className='section'>
      <h2 className='section-header'>
        Buttons
      </h2>
      <div className='section-body'>
        <DDButton type='button'>
          Default
        </DDButton>

        <DDButton action='success'>
          Confirm
        </DDButton>

        <DDButton action='cancel'>
          Cancel
        </DDButton>

        <DDButtonCustom>
          Custom
        </DDButtonCustom>

      </div>
    </section>
  )
}
