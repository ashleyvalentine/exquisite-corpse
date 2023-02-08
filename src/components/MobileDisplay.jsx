import { ImGithub } from 'react-icons/im'

function MobileDisplay() {
  return (
    <main className='w-screen h-screen flex flex-col place-content-center'>
      <section className='flex flex-col border w-3/4 p-4 mx-auto'>
        <h1 className='self-center'>
          We are working on optimizing for mobile. Check back soon!
          <a
            href='https://github.com/fakehouseplant/exquisite-corpse'
            className='pl-2'
          >
            <ImGithub />
          </a>
        </h1>
      </section>
    </main>
  )
}

export default MobileDisplay
