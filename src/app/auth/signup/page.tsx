import Auth from '@/components/Auth'

const page = () => {
  return (
    <div>
      <Auth
        title='Sign Up'
        actionTitle='Sign In here'
        haveAccount='Have an account already?'
        linkTo='/auth/signin'
      />
    </div>
  )
}

export default page
