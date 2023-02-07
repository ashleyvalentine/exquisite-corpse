import Canvas from './Canvas'

function GameDashboard({ setRoom, room, users }) {
  function handleLeaveRoom() {
    setRoom(null)
  }

  console.log(users, 'gameDashboard')

  const userNames = users.map((user) => <li key={user.id}>{user.name}</li>)

  return (
    <section className='flex flex-col'>
      <div className='flex flex-row'>
        <section className='border w-2/6 my-2 mx-2 p-4'>
          <h3 className='font-bold mx-auto'>Game Info</h3>
          <span>{room && `room-id: ${room}`}</span>
          <ul className='pt-4'>
            <li>Current Players:</li>
            {userNames}
          </ul>
        </section>
        <Canvas />
      </div>
      <button
        type='button'
        onClick={handleLeaveRoom}
        className='border w-1/4 mx-auto my-4 py-4'
      >
        Leave Room
      </button>
    </section>
  )
}

export default GameDashboard
