import GameDashboard from './GameDashboard'
import Header from './Header'
import Login from './Login'
import { SocketProvider } from '../contexts/SocketProvider'
import useSessionStorage from '../hooks/useSessionStorage'
import { GameRoomProvider } from '../contexts/GameRoomProvider'

function App() {
  const [room, setRoom] = useSessionStorage('roomId', null)
  const [user, setUser] = useSessionStorage('users', [])

  console.log('app', user)

  const gameDashboard = <GameDashboard gameRoom={room} setRoom={setRoom} />

  const login = <Login setRoom={setRoom} setUser={setUser} user={user} />

  return (
    <>
      <Header />
      <SocketProvider room={room}>
        <GameRoomProvider user={user} setUser={setUser}>
          {room ? gameDashboard : login}
        </GameRoomProvider>
      </SocketProvider>
    </>
  )
}

export default App
