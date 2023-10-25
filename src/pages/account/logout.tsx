import Page from '@/components/common/Page'
import { useRouter } from 'next/navigation'
// import { toast } from 'react-toastify'
import { useStore } from '@/stores'
import { useEffect } from 'react'
import Loading from '@/components/common/Loading'

function UserLogin() {
  const router = useRouter()
  const resetUser = useStore((state) => state.resetUser)
  const user = useStore((state) => state.user)

  resetUser()
  useEffect(() => {
    router.push('/')
  }, [user])

  // toast.success('Você está deslogado, redirecionando...', {
  //   theme: 'dark',
  // })

  return (
    <Page>
      <Loading />
    </Page>
  )
}

export default UserLogin
