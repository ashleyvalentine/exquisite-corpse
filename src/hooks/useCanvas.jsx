import { useRef, useEffect } from 'react'

function useCanvas() {
  const canvasRef = useRef(null)
  const ctxRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    ctx.lineWidth = 5
    ctx.strokeStyle = 'blue'
    ctxRef.current = ctx
  })

  return [canvasRef, ctxRef]
}

export default useCanvas
