function Button({ eventHandler, id, text }) {
  return (
    <button
      type='button'
      onClick={eventHandler}
      className='self-center border w-72 mt-4 py-4'
      id={id}
    >
      {text}
    </button>
  )
}

export default Button
