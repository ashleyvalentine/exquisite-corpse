import { useCallback } from 'react'
import Canvas from './Canvas'
import Button from './Button'

function GameDashboard({ room, users }) {
  const handleLeaveRoom = useCallback(() => {
    window.location.reload()
  }, [])

  const userNames = users.map((user) => <li key={user.id}>{user.name}</li>)

  return (
    <section className='flex flex-row'>
      <section className='border w-2/6 my-2 mx-2 p-4'>
        <h3 className='font-bold mx-auto'>Game Info</h3>
        <span>{room && `room-id: ${room}`}</span>
        <ul className='pt-4'>
          <li>Current Players:</li>
          {userNames}
        </ul>
        <Button
          eventHandler={handleLeaveRoom}
          id='leaveRoom'
          text='Leave Room'
        />
      </section>
      <Canvas />
    </section>
  )
}

export default GameDashboard
