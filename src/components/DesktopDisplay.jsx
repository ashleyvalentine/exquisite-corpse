import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import GameDashboard from './GameDashboard'
import Header from './Header'
import Login from './Login'

function DesktopDisplay() {
  const [room, setRoom] = useState()
  const [users, setUsers] = useState([])
  const [socket, setSocket] = useState(null)

  useEffect(() => {
    const newSocket = io('http://localhost:3050')

    setSocket(newSocket)
  }, [])

  useEffect(() => {
    if (socket === null) return

    socket.on('room-data', ({ userData }) => {
      setUsers(userData)
    })
  }, [socket])

  const gameDashboard = (
    <GameDashboard
      room={room}
      setRoom={setRoom}
      users={users}
      setUser={setUsers}
    />
  )

  const login = (
    <Login
      setRoom={setRoom}
      setUsers={setUsers}
      users={users}
      socket={socket}
    />
  )

  return (
    <>
      <Header />
      {room ? gameDashboard : login}
    </>
  )
}

export default DesktopDisplay
