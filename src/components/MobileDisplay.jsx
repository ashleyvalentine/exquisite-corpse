import { ImGithub } from 'react-icons/im'

function MobileDisplay() {
  return (
    <main className='w-screen h-screen flex flex-col place-content-center'>
      <section className='flex flex-col self-center border w-72 p-4'>
        <h1 className='font-bold pb-2 self-center'>exquisite corpse</h1>
        <h2 className='self-center pl-5'>
          We are working on optimizing for mobile. Check back soon!
          <a
            href='https://github.com/fakehouseplant/exquisite-corpse'
            className='pl-2'
          >
            <ImGithub />
          </a>
        </h2>
      </section>
    </main>
  )
}

export default MobileDisplay
