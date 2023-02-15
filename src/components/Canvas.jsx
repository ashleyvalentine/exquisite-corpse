// import { useState, useEffect } from 'react'
import UserCanvas from './UserCanvas'

function Canvas({ socket, room, users }) {
  const [user1, user2, user3] = users

  return (
    <div className='flex flex-col my-2 mr-2'>
      <UserCanvas socket={socket} room={room} user={user1} />
      <UserCanvas socket={socket} room={room} user={user2} />
      <UserCanvas socket={socket} room={room} user={user3} />
    </div>
  )
}

export default Canvas
