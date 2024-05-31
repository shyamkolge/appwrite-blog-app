import React , {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import authService from '../../appwrite/auth'
import { Button , Input , Logo } from '../index'
import { login } from '../../store/authSlice'

const SignUp = () => {
  
     const { register , handleSubmit} = useForm();

     const [error, setError] = useState("");

     const signUp = (data) =>{
        
        setError("")

        try {
               
        } catch (error) {
            setError(error.message);
        }


     }


  return (
      <div className='flex justify-center items-center w-full'>
        <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'>
            <div className='mb-2 flex justify-center'>
              <span className='inline-block w-full max-w-[100px] '>
                <Logo className= "100%"/>
              </span>
            </div>



        </div>
  
      </div>
  )
}

export default SignUp