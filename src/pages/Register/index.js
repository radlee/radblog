import React from 'react'
import { Link } from 'react-router-dom';

function Register() {

  const [user, setUser] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  const register = () => {
    console.log(user)
  }

  return (
    <div className='flex justify-center h-screen items-center bg-primary'>
      <div className='bg-white p-5'>
        <div className='flex flex-col gap-5 w-[450px]'>

        <h1 className='text-2xl font-bold text-center text-primary uppercase'>radBlok - Register</h1>

        <input 
          type='text' 
          placeholder='Enter your name' 
          value={ user.name }  
          onChange={(e) => setUser({...user, name: e.target.value})}
          />

        <input 
          type='email' 
          placeholder='Enter your email' 
          value={ user.email }  
          onChange={(e) => setUser({...user, email: e.target.value})}
          />

        <input 
          type='password' 
          placeholder='Enter your password' 
          value={ user.password }  
          onChange={(e) => setUser({...user, password: e.target.value})}
          />

        <button className='primary-contained-btn uppercase' onClick={register}>Register</button>

        <Link to='/login' className='text-center text-primary underline'>Already have an account ? Login</Link>

        </div>
      </div>
    </div>
  )
}

export default Register