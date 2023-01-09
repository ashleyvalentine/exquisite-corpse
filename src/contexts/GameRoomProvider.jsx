import React, { useContext, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSocket } from './SocketProvider'

const GameRoomContext = React.createContext()

function useGameRoom() {
  return useContext(GameRoomContext)
}

function GameRoomProvider({ user, setUser, children }) {
  const socket = useSocket()

  useEffect(() => {
    if (socket == null) return

    socket.on('new-user', (userName) => {
      setUser([...user, userName])
      console.log('new-user', user)
    })
  }, [socket])

  return (
    <GameRoomContext.Provider value={user}>{children}</GameRoomContext.Provider>
  )
}

GameRoomProvider.propTypes = {
  user: PropTypes.arrayOf(PropTypes.string),
  setUser: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}

GameRoomProvider.defaultProps = {
  user: []
}

export { useGameRoom, GameRoomProvider }
