import UserCanvas from './UserCanvas'

function Canvas({ socket, room }) {
  return (
    <div className='flex flex-col my-2 mr-2'>
      <UserCanvas socket={socket} room={room} />
    </div>
  )
}

export default Canvas
