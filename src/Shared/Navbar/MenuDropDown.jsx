import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import avatarImg from '../../assets/Login/Avatar.png'
import useAuth from '../../Components/hooks/useAuth'
import useRole from '../../Components/hooks/useRole'

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { user,logOut } = useAuth()

  const [roles] = useRole()

  const handleLogOut = () =>{
    logOut()
  }

  return (
    <div className='relative z-10'>
      <div className='flex flex-row items-center text-black gap-3'>
        {/* Become A Host btn */}
        {/* <div className='hidden md:block'>
          <button className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'>
            Host your home
          </button>
        </div> */}
        {/* Dropdown btn */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            {/* Avatar */}
            <img
              className='rounded-full'
              referrerPolicy='no-referrer'
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt='profile'
              height='30'
              width='30'
            />
          </div>
        </div>

      </div>
      {isOpen && (
        <div className='absolute rounded-xl text-black shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link
              to='/'
              className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Home
            </Link>

            {user ? <>
            <p className='text-center'>{user?.displayName}</p>
              {roles === 'admin' && <Link
              to='/dashboard'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Dashboard
            </Link>}
            {
              roles === 'guest' && <Link
              to='/dashboard/userHome'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Dashboard
            </Link>
            }

            {
              roles === 'member' && <Link
              to='/dashboard/memberHome'
              className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
            >
              Dashboard
            </Link>
            }

            <div onClick={handleLogOut}
              className='px-4 py-3 hover:bg-neutral-100 cursor-pointer transition font-semibold'
            >
             Logout
            </div>
            </> : <>
              <Link
                to='/login'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                Login
              </Link>
              <Link
                to='/signup'
                className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
              >
                Sign Up
              </Link>
            </>}
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown