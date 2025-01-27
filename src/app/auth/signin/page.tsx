import React from 'react'
import Auth from '@/components/Auth'

const signin = () => {
  return (
    <div>
      <Auth
        title='Sign in'
        actionTitle='Register here'
        haveAccount="Don't have an account?"
        linkTo='/auth/signup'
      />
    </div>
  )
}

export default signin
