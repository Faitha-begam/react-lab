import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-slate-300 p-5 flex justify-between'>
      <div className='text-blue-900'>
        Logo
      </div>
      <div className='flex gap-5 text-blue-900'>
       <Link to="/">Student</Link>
        <Link to="/employee">Employee</Link>
        <Link to="/products">Products</Link>
        <Link to="/movies">Movies</Link>
      </div>
    </div>
  )
}

export default Navbar
