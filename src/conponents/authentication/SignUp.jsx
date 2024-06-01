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
     
     const navigate = useNavigate()
     const dispatch = useDispatch()

     const createAccount = async (data) => {
        setError("")

        try {
          const userData = await authService.createAccount(data);

          if(userData){
                dispatch(login(userData))
          }
               
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

            <h2 className='text-center  text-2xl font-bold leading-tight'>Create a new account </h2>

            <p className='mt-2 text-center text-base text-black/60'>
                 Have a account?&nbsp;
                  <Link 
                    to="/login"
                    className='font-medium text-primary transition-all duration-200 hover:underline'>
                        Login
                  </Link>
            </p>
            { error && <p className='text-red-600 mt-8 text-center'>{error}</p>}


            <form onSubmit={handleSubmit(createAccount)} className='mt-8'>
                
                <div className='space-y-5'>

                <Input 
                      label = "Name : "
                      placeholder ="Enter your name "
                      type = 'text'
                      name = "name"
                      {...register('name', {
                          required : true,   
                      })}/>

                <Input 
                      label = 'Email : '
                      placeholder = "Enter your email"
                      type = "email"
                      name = "email"
                      {...register("email", {
                              required : true,
                              validate : { 
                                  matchPatern: (value) => 
                                            /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/.test(value) || "Email adress must be valid adress",
                                  }
                      })}
                    />
                    
                    <Input
                         label = "Password : "
                         placeholder = "Enter your password"
                         type = 'password'
                         name = 'password'
                         {...register('password' , {
                           required : true,
                           validate : {
                                  matchPatern : (value) =>  /^((?=.*[\d])(?=.*[a-z])(?=.*[A-Z])|(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[A-Z])(?=.*[^\w\d\s])|(?=.*[\d])(?=.*[a-z])(?=.*[^\w\d\s])).{7,30}$/.test(value) || 'Enter a valid password'
                           }
                        })}
                      />
                 

                  
                     <Button
                      type='submit'
                      className='w-full'
                     >
                       Sign In
                    </Button>
                </div>

            </form>
        </div>
  
      </div>
  )
}

export default SignUp