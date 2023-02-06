import { useRef } from 'react'
import { v4 as uuidV4 } from 'uuid'

function Login({ setRoom, socket }) {
  const roomRef = useRef()
  const userRef = useRef()

  function addUser(userName, userRoom) {
    socket.emit('add-user', { userName, userRoom }, (response) => {
      console.log(response.status)
    })
  }

  function handleJoinRoom(e) {
    e.preventDefault()
    e.stopPropagation()

    const userName = userRef.current.value
    const userRoom = roomRef.current.value

    addUser(userName, userRoom)
    setRoom(userRoom)
  }

  function handleCreateNewRoom(e) {
    e.preventDefault()
    e.stopPropagation()

    const userName = userRef.current.value
    const userRoom = uuidV4()

    addUser(userName, userRoom)
    setRoom(userRoom)
  }

  return (
    <main className='w-screen h-screen flex flex-col place-content-center'>
      <form
        onSubmit={handleJoinRoom}
        className='flex flex-col w-2/4 mx-auto place-content-center'
      >
        <label htmlFor='roomId' className='mx-auto p-2'>
          Enter Room Id
          <input
            type='text'
            ref={roomRef}
            id='roomId'
            className='border mx-2 p-2'
          />
        </label>
        <label htmlFor='userName' className='mx-auto p-2'>
          Enter User Name
          <input
            type='text'
            ref={userRef}
            id='userName'
            className='border mx-2 p-2'
          />
        </label>
        <button type='submit' className='border w-2/4 mx-auto my-2 py-4'>
          Join Room
        </button>
        <button
          type='button'
          onClick={handleCreateNewRoom}
          className='border w-2/4 mx-auto my-2 py-4'
        >
          Create New Game Room
        </button>
      </form>
    </main>
  )
}

export default Login
