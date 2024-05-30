import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { Input , Button, Logo } from './index'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

const Login = () => {
 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register , handleSubmit } = useForm();
    const [error , setError] = useState("");

    const login = async ( data ) => {
        setError("")
        
        try {
            const session = authService.login(data);

            if (session) {
                const userData = authService.getCurrentUser()

                if (userData) dispatch(authLogin(userData))
            }
            
        } catch (error) {
            setError(error.message);
        }
    }  


  return (
    <div>
        <form action=""></form>       

    </div>
  )
}

export default Login