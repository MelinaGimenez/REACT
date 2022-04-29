const error = ({children}) => {
  return (
    (<div className='bg-red-800 text-white text-center p-3 font-bold mb-10 rounded-md'>
        {children}
    </div>)
  )
}

export default error