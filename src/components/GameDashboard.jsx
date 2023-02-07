import Canvas from './Canvas'

function GameDashboard({ setRoom }) {
  function handleLeaveRoom() {
    setRoom(null)
  }

  return (
    <div className='flex flex-col'>
      <button
        type='button'
        onClick={handleLeaveRoom}
        className='border w-1/4 mx-auto my-4 py-4'
      >
        Leave Room
      </button>
      <Canvas />
    </div>
  )
}

export default GameDashboard
