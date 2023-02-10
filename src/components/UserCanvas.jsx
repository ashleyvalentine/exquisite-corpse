import { useCallback, useState } from 'react'
import useCanvas from '../hooks/useCanvas'

// import PropTypes from 'prop-types'

function UserCanvas() {
  const [isDrawing, setIsDrawing] = useState(false)
  const [canvasRef, ctxRef] = useCanvas()

  const setWidth = () => {
    const canvasWidth = window.innerWidth * 0.65

    return canvasWidth
  }

  const width = setWidth()

  const setHeight = (w) => {
    const canvasHeight = w * 1.5

    return canvasHeight
  }

  const height = setHeight(width)

  const startDrawing = (e) => {
    ctxRef.current.beginPath()
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    setIsDrawing(true)
  }

  const stopDrawing = () => {
    ctxRef.current.closePath()
    setIsDrawing(false)
  }

  const draw = (e) => {
    if (!isDrawing) {
      return
    }

    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    ctxRef.current.stroke()
  }

  const clearCanvas = useCallback(() => {
    ctxRef.current.clearRect(0, 0, width, height)
  }, [ctxRef, width, height])

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

// Canvas.propTypes = {}

export default UserCanvas
