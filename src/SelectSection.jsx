import DDSelect from './components/Select'

export default function CheckboxRadioSection () {
  return (
    <section className='section'>
      <h2 className='section-header'>
        Select
      </h2>
      <div className='section-body'>

        <DDSelect name='testing'>
          <span value='test' text='Primera opción' />
          <span value='test2' text='Segunda opción' />
          <span value='test3' text='Tercera opción' />
          <span value='test4' text='Cuarta opción' />
          <span value='test5' text='Quinta opción' />
        </DDSelect>

      </div>
    </section>
  )
}
