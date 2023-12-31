import { useState } from 'react'

// Icons
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import useRole from '../../../Components/hooks/useRole';
import AdminMenu from './AdminMenu';
import UserMenu from './UserMenu';
import MemberMenu from './MemberMenu';

const Sidebar = () => {

    const [isActive, setActive] = useState(false)
    const [roles] = useRole()


    console.log('role is', roles)


    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        {/* <Logo /> */}
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <Link to="/">
                            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto'>
                                <img src="../../../../public/logo11.png" alt="" />
                            </div>
                        </Link>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* If a user is host */}

                        <nav>

                            {roles === 'admin' && <AdminMenu></AdminMenu>}
                            {roles === 'guest' && <UserMenu></UserMenu>}
                            {roles === 'member' && <MemberMenu></MemberMenu>}

                        </nav>


                    </div>
                </div>

                <div>
                    <hr />

                    <button className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />

                        <Link to="/"><span className='mx-4 font-medium'>Home</span></Link>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar