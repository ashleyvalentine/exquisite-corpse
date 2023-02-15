import { useCallback, useState, useEffect, useRef } from 'react'

function UserCanvas({ socket, room }) {
  const canvasRef = useRef(null)
  const [context, setContext] = useState(null)
  const [current, setCurrent] = useState({})
  const [drawing, setDrawing] = useState(false)

  console.log(context)

  useEffect(() => {
    setContext(canvasRef.current.getContext('2d'))
  }, [])

  const setCanvasWidth = () => {
    const canvasWidth = window.innerWidth * 0.65

    return canvasWidth
  }

  const setCanvasHeight = (w) => {
    const canvasHeight = w * 1.5

    return canvasHeight
  }

  const width = setCanvasWidth()
  const height = setCanvasHeight(width)

  const drawLine = useCallback(
    (x0, y0, x1, y1, emit) => {
      context.beginPath()
      context.moveTo(x0, y0)
      context.lineTo(x1, y1)
      context.stroke()
      context.closePath()

      if (!emit) return

      socket.emit('drawing', {
        x0: x0 / width,
        y0: y0 / height,
        x1: x1 / width,
        y1: y1 / height,
        room
      })
    },
    [context, socket, height, width, room]
  )

  const startDrawing = (e) => {
    setDrawing(true)
    const { offsetX, offsetY } = e.nativeEvent

    setCurrent({ x: offsetX, y: offsetY })
  }

  const stopDrawing = (e) => {
    if (!drawing) return
    const { offsetX, offsetY } = e.nativeEvent

    setDrawing(false)
    drawLine(current.x, current.y, offsetX, offsetY, true)
  }

  const draw = (e) => {
    if (!drawing) return
    const { offsetX, offsetY } = e.nativeEvent

    drawLine(current.x, current.y, offsetX, offsetY, true)
    setCurrent({ x: offsetX, y: offsetY })
  }

  const onDrawingEvent = useCallback(
    (data) => {
      drawLine(
        data.x0 * width,
        data.y0 * height,
        data.x1 * width,
        data.y1 * height
      )
    },
    [drawLine, height, width]
  )

  useEffect(() => {
    if (socket === null) return

    socket.on('drawing', onDrawingEvent)

    return () => socket.off('drawing', onDrawingEvent)
  }, [socket, onDrawingEvent])

  const clearCanvas = useCallback(() => {
    context.clearRect(0, 0, width, height)
  }, [context, width, height])

  return (
    <section>
      <button
        type='button'
        onClick={clearCanvas}
        className='border w-full mb-2 py-4 hover:bg-emerald-400'
      >
        Clear Canvas
      </button>
      <canvas
        ref={canvasRef}
        onMouseUp={stopDrawing}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        height={height}
        width={width}
        className='self-center border'
      />
    </section>
  )
}

export default UserCanvas
