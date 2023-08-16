import { UserButton } from "@clerk/nextjs"

const RootPage = () => {
  return (
    <div className='text-green-500 text-xl'>
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default RootPage;
