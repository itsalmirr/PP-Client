import Link from 'next/link'

interface SignInProps {
  title: string
  actionTitle: string
  haveAccount: string
  linkTo: string
}

const Auth = ({ title, actionTitle, haveAccount, linkTo }: SignInProps) => {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl/9 font-bold tracking-tight text-white'>
          {title}
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form action='#' method='POST' className='space-y-6'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm/6 font-medium text-white'
            >
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                required
                autoComplete='email'
                className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white -outline-offset-1 outline-white/10 placeholder:text-gray-500 sm:text-sm/6'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between'>
              <label
                htmlFor='password'
                className='block text-sm/6 font-medium text-white'
              >
                Password
              </label>
              <div className='text-sm'>
                <a
                  href='#'
                  className='font-semibold text-cyan-400 hover:text-cyan-300'
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                required
                autoComplete='current-password'
                className='block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white -outline-offset-1 outline-white/10 placeholder:text-gray-500 sm:text-sm/6'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full cursor-pointer justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-cyan-400 focus-visible:outline-offset-2 focus-visible:outline-cyan-500'
            >
              Sign in
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm/6 text-gray-400'>
          {haveAccount}{' '}
          <Link
            href={linkTo}
            className='font-semibold text-cyan-400 hover:text-cyan-300'
          >
            {actionTitle}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Auth
