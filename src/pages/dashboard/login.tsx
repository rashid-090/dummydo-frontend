import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminSignIn } from '../../api/apiConnections/authConnections';
import { toast } from 'react-toastify';

const AdminLogin = () => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const signInHandler = async(event: { preventDefault: () => void; })=>{
    event.preventDefault()

    if(email.trim().length && password.trim().length){
      const response = await adminSignIn(email,password)
      if(response?.status){
        toast.success(response.message)
        localStorage.setItem("token",response.data.token)
        navigate("/dashboard")
      }else{
        toast.error(response.message)
      }
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your Dashboard
          </h2>
        </div>
        <form onSubmit={signInHandler} className="mt-8 space-y-6">
            <div className='space-y-3'>
              <div>
                <input
                  required
                  type="email"
                  defaultValue={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  required
                  id="password"
                  type="password"
                  defaultValue={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main "
            >
              login
            </button>
          </div>
        </form>
        <div className="text-sm font-medium text-main text-center flex flex-col gap-y-5">
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
