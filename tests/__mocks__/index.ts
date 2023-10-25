import { useRouter } from 'next/navigation'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: () => null,
    }
  },
}))

export const routerMock = useRouter as unknown
