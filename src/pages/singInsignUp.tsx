import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInSignUpForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isSignIn ? 'Sign in to your account' : 'Create an account'}
          </h2>
        </div>
        <form className="mt-8 space-y-6">
          {/* Sign-in Form */}
          {isSignIn && (
            <div className='space-y-3'>
              <div>
                <input
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
          )}

          {/* Sign-up Form */}
          {!isSignIn && (
            <div className='space-y-3'>
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-main focus:border-main focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-main "
            >
              {isSignIn ? 'Sign in' : 'Sign up'}
            </button>
          </div>
        </form>
        <div className="text-sm font-medium text-main text-center flex flex-col gap-y-5">
          <button
            onClick={toggleForm}
          >
            {isSignIn ? 'Don\'t have an account? Sign up' : 'Already have an account? Sign in'}
          </button>
        <Link to={'/'}>Back to home</Link>
        </div>
      </div>
    </div>
  );
};

export default SignInSignUpForm;
