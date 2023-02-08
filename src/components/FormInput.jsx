function FormInput({ id, label, inputRef }) {
  return (
    <label htmlFor={id} className='flex flex-col self-center w-96'>
      {label}
      <input
        type='text'
        ref={inputRef}
        id={id}
        className='border self-center w-full p-2'
      />
    </label>
  )
}

export default FormInput
