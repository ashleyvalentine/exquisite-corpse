import { useRef, useState, useCallback } from 'react'
import { v4 as uuidV4 } from 'uuid'
import FormInput from './FormInput'
import Button from './Button'

function Login({ setRoom, socket }) {
  // add check for valid room string
  const [errorAlert, setErrorAlert] = useState(null)
  const roomRef = useRef()
  const userRef = useRef()

  const addUser = useCallback(
    (userName, userRoom) => {
      socket.emit('add-user', { userName, userRoom }, (error) => {
        if (error) {
          setErrorAlert(error)
        } else {
          setRoom(userRoom)
        }
      })
    },
    [setRoom, socket]
  )

  const handleJoinOrCreateRoom = useCallback(
    (e) => {
      e.preventDefault()

      const userName = userRef.current.value
      const userRoom =
        e.target.id === 'joinRoom' ? roomRef.current.value : uuidV4()

      addUser(userName, userRoom)
    },
    [addUser]
  )

  return (
    <main className='w-screen h-screen flex flex-col place-content-center'>
      <section className='flex flex-col border w-98 p-4 mx-auto'>
        <form className='flex flex-col'>
          <FormInput id='roomId' label='Enter Room Id:' inputRef={roomRef} />
          <FormInput id='name' label='Enter Username:' inputRef={userRef} />
          {errorAlert && <p>{errorAlert}</p>}
          <Button
            eventHandler={handleJoinOrCreateRoom}
            id='joinRoom'
            text='Join Room'
          />
          <Button
            eventHandler={handleJoinOrCreateRoom}
            id='createNewRoom'
            text='Create New Game Room'
          />
        </form>
      </section>
    </main>
  )
}

export default Login
