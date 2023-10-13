import { styled } from '@lebernardo/react'

export const HeaderSection = styled('header', {
  background: '$gray700',
})

export const HeaderContainer = styled('div', {
  maxWidth: '64rem',
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0.75rem',

  a: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
    color: '$white',
    fontSize: '$lg'
  },
})

export const InputContainer = styled('form', {
  flex: '1',
  maxWidth: '20rem',
})
