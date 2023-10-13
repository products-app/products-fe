import { styled } from '@lebernardo/react'

export const Input = styled('input', {
  background: '$gray900',
  padding: '1rem',
  marginBottom: '3rem',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'baseline',
  outline: 'none',

  '&:focus': {
    borderColor: '$base300',
  },
})
