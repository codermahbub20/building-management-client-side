
// import { FcGoogle } from 'react-icons/fc'
import { FcGoogle } from "react-icons/fc";

// import { getToken, saveUser } from '../../components/api/auth';
import toast from 'react-hot-toast';
// import { TbFidgetSpinner } from "react-icons/tb";
import { imageUpload } from '../../Components/api/utils';
import useAuth from '../../Components/hooks/useAuth';
import { saveUser } from '../../Components/hooks/saveUser';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const SignUp = () => {

  const { createUser, signInWithGoogle, updateUserProfile} = useAuth()
  const navigate = useNavigate()

  // const notify = () => toast("Registration Successful!");
  // const notify1 = () => toast('Password should be at 6 characters or longer');
  // const notify2 = () => toast('your Password should have at one upper case latter');
  // const notify3 = () => toast('your Password should have at one special characters');


  const handleSignUp = async e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0]


    try {
      
      //1. Upload Image
      const imageData = await imageUpload(image)

      // if (password.length < 6) {
      //   notify1();
      //   return;
      // } else if (!/[A-Z]/.test(password)) {
      //   notify2();
      //   return;
      // } else if (!/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/.test(password)) {
      //   notify3();
      //   return;
      // }
      //2. User Registration
      const result = await createUser(email, password)

      //3. Save username & profile photo
      await updateUserProfile(name, imageData?.data?.display_url)
      console.log(result)

      //4. save user data in database
      const dbResponse = await saveUser(result?.user)
      console.log(dbResponse)

      if (dbResponse.upsertedCount > 0) {
        Swal.fire({
            title: 'Success!',
            text: 'SignUp Successful',
            icon: 'success',
            confirmButtonText: 'Great',
        });
        
    }
    navigate('/login')
    } catch (err) {
      console.log(err)
      toast.error(err?.message)

    }
    form.reset()
  }
  // notify()
  // 
  const handleGoogleSignIn = async () => {
    try {

      //2. User Registration
      const result = await signInWithGoogle()
      console.log(result)

      //4. save user data in database
      const dbResponse = await saveUser(result?.user)
      console.log(dbResponse)
      result.user.email

    } catch (err) {
      console.log(err)
      toast.error(err?.message)
    }
    // notify()
  }

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Sign Up</h1>
          <p className='text-sm text-gray-400'>Welcome to West Cot</p>
        </div>
        <form onSubmit={handleSignUp}
          noValidate=''
          action=''
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#FF3811] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                name='image'
                accept='image/*'
              />
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#FF3811] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='new-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#FF3811] bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-[#FF3811] w-full rounded-md py-3 text-white'
            >
              {/* {
                loading ? <TbFidgetSpinner className='animate-spin mx-auto'></TbFidgetSpinner> :' Continue'
              } */}Signup
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Signup with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div onClick={handleGoogleSignIn} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default SignUp