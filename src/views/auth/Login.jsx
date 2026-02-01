import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className=" min-w-screen min-h-screen flex justify-center items-center bg-[#cdcae9]">
      <div className=" w-[350px] text-[#ffffff] p-2">
        <div>
          <div className="bg-[#6f68d1] p-4 rounded-md">
            <h2 className='text-xl mb-3  font-bold'>Welcome Back to Ecommerce </h2>
            <p className="mb-3 text-sm font-medium ">Please login to your account </p>
            <form>
              <div className="flex flex-col gap-1 mb-3 w-full">
                <label htmlFor='email'>Email</label>
                <input className="px-3 py-2 outline-none border border-slate-700 bg-transparent  rounded-md" type="text" name="email" placeholder="email" id="email" required />
              </div>
              <div className="flex flex-col gap-1 mb-3 w-full">
                <label htmlFor='email'>Password</label>
                <input className="px-3 py-2 outline-none border border-slate-700 bg-transparent  rounded-md" type="password" name="password" placeholder="Password" id="password" required />
              </div>
              <button className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">Sign In</button>
              <div className=" flex item-center mb-3 gap-3 justify-center">
                <p>Create new account ?<Link to="/register" className="font-bold"> Sign Up </Link></p>
              </div>
              <div className="w-full flex justify-center items-center  mb-3">
                <div className='w-[45%] bg-slate-700 h-[1px]'></div>
                <div className="w-[10%] flex justify-center items-center">
                  <span className='pb-1'>Or</span>
                </div>
                <div className='w-[45%] bg-slate-700 h-[1px]'></div>
              </div>

              <div className="flex items-center justify-center gap-3 ">
                <div className='flex justify-center items-center gap-3'>
                  <div className='w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                    <span><FaGoogle /></span>
                  </div>

                  <div className='w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden'>
                    <span><FaFacebook /></span>
                  </div>

                </div>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login