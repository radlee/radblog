import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

function Login() {

  const [user, setUser] = React.useState({
    email: '',
    password: ''
  });

  const login = () => {
    console.log(user)
  }

  return (
    <div className='flex justify-center h-screen items-center bg-primary'>
      <div className='bg-white p-5'>
        <div className='flex flex-col gap-5 w-[450px]'>

        <h1 className='text-2xl font-bold text-center text-primary uppercase'>radBlok - Login</h1>

    
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

        <Button 
          title='Login' 
          onClick={login}
          disabled={
            user.email.length < 3 ||
            user.password.length < 3
          }
        />

        <Link to='/register' className='text-center text-primary underline'>Don't have an account ? Register</Link>

        </div>
      </div>
    </div>
  )
}

export default Login