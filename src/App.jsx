import './App.css'
import ButtonSection from './ButtonSection'
import CheckboxRadioSection from './CheckboxRadioSection'
import SelectSection from './SelectSection'

export default function App () {
  return (
    <main className='text-gray-400 py-4 flex flex-col items-center md:p-4'>
      <section className='h-20'>
        <h1 className='text-3xl'>Utilities</h1>
      </section>

      <div className='w-full flex flex-col items-center gap-4 md:w-[1140px] md:flex md:flex-wrap md:flex-row md:items-stretch md:justify-between'>

        <ButtonSection />

        <CheckboxRadioSection />

        <SelectSection />

      </div>

      <footer className='p-6 text-xs'>
        Utilities by DipDip
      </footer>
    </main>
  )
}
