import React from 'react'
// import App from '@/App'
import { Dark_Blue } from '../assets'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'



import { useNavigate } from 'react-router-dom'

const SignIn = () => {
 
  return (

    <div className='w-[700px] h-[450px] ss:h-[700px] p-4 mx-auto'>
      <div className=" ss:h-[900px] p-4 bg-white rounded-[34px] shadow-md overflow-hidden m-[14px] ss:mb-[14px] mb-[14px] border-2 border-white-500">
        <div className='w-full mr-7'>
          <div className="md:flex">
            <div className="md:ml-[225px]">
              <img src={Dark_Blue}
                alt="Dark_Blue"
                className="h-[112px] w-[171px] " />
            </div>
          </div>
          <div className="py-5 ">
            <div className=" ss:text-[36px] text-[28px] text-black ss:leading-[10px] leading-[40px] ss:text-center flex flex-row justify-center">
              <h1 className='font-bold'>
                Create An Account
              </h1>
            </div>
            <div className='flex flex-row justify-center mt-5 ss:mt-5 '>
              <p className='ss:text-[14px] text-[16px] text-gray-500'>Fill your all details and continue.</p>
            </div>
          </div>

          <div className='flex flex-col justify-start mt-2'>
            <div className='grid grid-cols-12 text-balance'>
              <div className='flex justify-start col-span-12'>
                <label htmlFor="shop name" className='justify-start '>Shop Name</label>
              </div>
              <div className='col-span-12'>
                <Input id="shop name" type="Shop name" placeholder="Enter Shop Name" />
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-start mt-2'>
            <div className='grid grid-cols-12 text-balance'>
              <div className='flex justify-start col-span-12'>
                <label htmlFor="Category" className='justify-start '>Category</label>
              </div>
              <div className='col-span-12'>
                <Input id="category" type="Category" placeholder="Select Shop Category" />
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-start mt-2'>
            <div className='grid grid-cols-12 text-balance'>
              <div className='flex justify-start col-span-12'>
                <label htmlFor="email" className='justify-start '>Email</label>
              </div>
              <div className='col-span-12'>
                <Input id="email" type="Email" placeholder="Email" />
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-start mt-2 '>
            <div className='grid grid-cols-12 text-balance'>
              <div className='flex justify-start col-span-12'>
                <label htmlFor="Email" className='justify-start '>Mobile</label>
              </div>
              <div className='col-span-12'>
                <Input id="email" type="Email" placeholder="Mobile" />
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-start mt-2'>
            <div className='grid grid-cols-12 text-balance'>
              <div className='flex justify-start col-span-12'>
                <label htmlFor="password" className='justify-start '>Password</label>
              </div>
              <div className='col-span-12'>
                <Input id="password" type="Password" placeholder="*******" />
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-start mt-2'>
            <div className='grid grid-cols-12 text-balance'>
              <div className='flex justify-start col-span-12'>
                <label htmlFor="password" className='justify-start '>Conform Password</label>
              </div>
              <div className='col-span-12'>
                <Input id="password" type="password" placeholder="******" />
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center mt-6 space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>

          <div className="w-full mt-4">
            <div className='grid grid-cols-12 gap-3 '>
              <div className='col-span-12 lg:col-span-6 '>
                <button className='flex items-center w-full h-10 p-2 text-white rounded-lg button-color hover:bg-gray-500'>
                  <p className='ml-[29%]'> Back To Home </p>
                </button>
              </div>
              <div className='col-span-12 text-center lg:col-span-6'>
                <Button>
                  <p className='ml-[29%]'> Create Account </p>
                </Button>
              </div>
            </div>
          </div>
          <div className='flex justify-center mt-6'>
            <p>Already have an Account?
            <Link to={"/SignUp"} className="text-[#A7C957] text-[16px] ml-1">
              Sign in
            </Link>
            </p>
           

          </div>
        </div>
      </div>

    </div>

  )
}

export default SignIn