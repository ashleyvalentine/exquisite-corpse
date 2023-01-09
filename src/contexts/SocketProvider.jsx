import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { io } from 'socket.io-client'

const SocketContext = React.createContext()

export function useSocket() {
  return useContext(SocketContext)
}

export function SocketProvider({ room, children }) {
  const [socket, setSocket] = useState()

  useEffect(() => {
    const newSocket = io('http://localhost:3050', { query: { room } })

    setSocket(newSocket)

    return () => newSocket.close()
  }, [room])

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  )
}

SocketProvider.propTypes = {
  room: PropTypes.string,
  children: PropTypes.node.isRequired
}

SocketProvider.defaultProps = {
  room: null
}
